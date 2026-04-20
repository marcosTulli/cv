'use client';
import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { languageStore, userStore } from '@/store';
import { useUi } from '@/hooks';
import { useExperienceMutations } from '@/hooks/queries';

interface TaskField {
  id: string;
  value: string;
  isNew: boolean;
}

const ExperienceFormModal: React.FC = () => {
  const { strings, currentLanguage: lang } = languageStore();
  const { user } = userStore();
  const { experienceDialog, closeExperienceDialog } = useUi();
  const mutations = useExperienceMutations();
  const { postActivePeriod, upsertInfo } = mutations;

  const isAdd = experienceDialog.mode === 'add';
  const isEdit = experienceDialog.mode === 'edit';
  const isOpen = isAdd || isEdit;
  const experience = experienceDialog.experience;

  const [companyName, setCompanyName] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [tasks, setTasks] = React.useState<TaskField[]>([]);
  const [touched, setTouched] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const originalTasksRef = React.useRef<{ _id: string; task: string }[]>([]);

  React.useEffect(() => {
    if (isEdit && experience) {
      setCompanyName(experience.companyName || '');
      setPosition(experience.info?.position || '');
      setStartDate(experience.activePeriod?.startDate || '');
      setEndDate(experience.activePeriod?.endDate || '');
      const originalTasks = experience.info?.tasks || [];
      originalTasksRef.current = originalTasks;
      setTasks(originalTasks.map((t) => ({ id: t._id, value: t.task, isNew: false })));
    } else if (isAdd) {
      setCompanyName('');
      setPosition('');
      setStartDate('');
      setEndDate('');
      setTasks([]);
      originalTasksRef.current = [];
    }
    setTouched(false);
    setSubmitting(false);
  }, [isAdd, isEdit, experience]);

  const companyNameError = touched && !companyName.trim();
  const startDateError = touched && !startDate.trim();
  const hasError = !companyName.trim() || !startDate.trim();

  const handleClose = () => {
    if (!submitting) closeExperienceDialog();
  };

  const handleTaskChange = (index: number, value: string) => {
    setTasks((prev) => prev.map((t, i) => (i === index ? { ...t, value } : t)));
  };

  const handleRemoveTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddTask = () => {
    setTasks((prev) => [...prev, { id: `new-${Date.now()}`, value: '', isNew: true }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (hasError || !user._id || (!experience?._id && isEdit)) return;

    if (isAdd) {
      setSubmitting(true);
      mutations.addExperience.mutate(
        {
          userId: user._id,
          companyName: companyName.trim(),
          startDate: startDate.trim(),
          endDate: endDate.trim() || undefined,
        },
        {
          onSuccess: (data) => {
            const newId = (data as { _id: string })._id;
            const followUp: Promise<unknown>[] = [];

            if (startDate.trim()) {
              followUp.push(
                new Promise((resolve, reject) =>
                  postActivePeriod.mutate(
                    {
                      userId: user._id,
                      experienceId: newId,
                      startDate: startDate.trim(),
                      endDate: endDate.trim(),
                    },
                    { onSuccess: resolve, onError: reject },
                  ),
                ),
              );
            }

            if (position.trim()) {
              followUp.push(
                new Promise((resolve, reject) =>
                  upsertInfo.mutate(
                    { userId: user._id, experienceId: newId, lang, position: position.trim() },
                    { onSuccess: resolve, onError: reject },
                  ),
                ),
              );
            }

            if (followUp.length === 0) {
              setSubmitting(false);
              handleClose();
              return;
            }

            Promise.all(followUp)
              .then(() => handleClose())
              .catch(() => {})
              .finally(() => setSubmitting(false));
          },
          onError: () => setSubmitting(false),
        },
      );
      return;
    }

    if (!experience) return;
    setSubmitting(true);

    const promises: Promise<unknown>[] = [];
    const expId = experience._id;

    // Company name
    if (companyName.trim() !== (experience.companyName || '')) {
      promises.push(
        new Promise((resolve, reject) =>
          mutations.patchCompanyName.mutate(
            { userId: user._id, experienceId: expId, companyName: companyName.trim() },
            { onSuccess: resolve, onError: reject },
          ),
        ),
      );
    }

    // Active period
    if (
      startDate.trim() !== (experience.activePeriod?.startDate || '') ||
      endDate.trim() !== (experience.activePeriod?.endDate || '')
    ) {
      promises.push(
        new Promise((resolve, reject) =>
          mutations.patchActivePeriod.mutate(
            {
              userId: user._id,
              experienceId: expId,
              startDate: startDate.trim(),
              endDate: endDate.trim(),
            },
            { onSuccess: resolve, onError: reject },
          ),
        ),
      );
    }

    // Position
    if (position.trim() !== (experience.info?.position || '')) {
      promises.push(
        new Promise((resolve, reject) =>
          upsertInfo.mutate(
            { userId: user._id, experienceId: expId, lang, position: position.trim() },
            { onSuccess: resolve, onError: reject },
          ),
        ),
      );
    }

    // Tasks diff
    const originals = originalTasksRef.current;
    const currentIds = new Set(tasks.filter((t) => !t.isNew).map((t) => t.id));

    // Deleted tasks
    for (const orig of originals) {
      if (!currentIds.has(orig._id)) {
        promises.push(
          new Promise((resolve, reject) =>
            mutations.deleteTask.mutate(
              { userId: user._id, experienceId: expId, lang, taskId: orig._id },
              { onSuccess: resolve, onError: reject },
            ),
          ),
        );
      }
    }

    // Edited tasks
    for (const task of tasks) {
      if (task.isNew) continue;
      const orig = originals.find((o) => o._id === task.id);
      if (orig && task.value.trim() !== orig.task) {
        promises.push(
          new Promise((resolve, reject) =>
            mutations.patchTask.mutate(
              {
                userId: user._id,
                experienceId: expId,
                lang,
                taskId: task.id,
                task: task.value.trim(),
              },
              { onSuccess: resolve, onError: reject },
            ),
          ),
        );
      }
    }

    // New tasks
    for (const task of tasks) {
      if (!task.isNew || !task.value.trim()) continue;
      promises.push(
        new Promise((resolve, reject) =>
          mutations.addTask.mutate(
            { userId: user._id, experienceId: expId, lang, task: task.value.trim() },
            { onSuccess: resolve, onError: reject },
          ),
        ),
      );
    }

    if (promises.length === 0) {
      handleClose();
      return;
    }

    try {
      await Promise.all(promises);
      handleClose();
    } catch {
      // individual errors already show snackbar
    } finally {
      setSubmitting(false);
    }
  };

  const title = isAdd ? strings.addExperienceTitle : strings.editExperienceTitle;
  const TitleIcon = isAdd ? AddIcon : EditIcon;

  return (
    <Dialog
      component="form"
      onSubmit={handleSubmit}
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 3,
          bgcolor: 'defaultBackground.paper',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          m: { xs: 2, sm: 3 },
        },
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          p: 2,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
        }}
      >
        <TitleIcon sx={{ color: 'white', fontSize: 24, flexShrink: 0, mt: 0.25 }} />
        <DialogTitle
          sx={{ p: 0, color: 'white', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}
        >
          {title}
        </DialogTitle>
      </Box>
      <DialogContent sx={{ pt: 3, pb: 2 }}>
        <TextField
          autoFocus
          required
          fullWidth
          margin="dense"
          label={strings.companyNameLabel}
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          onBlur={() => setTouched(true)}
          error={companyNameError}
          helperText={companyNameError ? strings.requiredFieldError : ' '}
          inputProps={{ maxLength: 100 }}
          sx={inputSx}
        />
        <TextField
          fullWidth
          margin="dense"
          label={strings.positionLabel}
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          inputProps={{ maxLength: 100 }}
          helperText=" "
          sx={inputSx}
        />
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <TextField
            required
            fullWidth
            margin="dense"
            label={strings.startDateLabel}
            placeholder="MM/YYYY"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            onBlur={() => setTouched(true)}
            error={startDateError}
            helperText={startDateError ? strings.requiredFieldError : 'MM/YYYY'}
            inputProps={{ maxLength: 7 }}
            sx={inputSx}
          />
          <TextField
            fullWidth
            margin="dense"
            label={strings.endDateLabel}
            placeholder="MM/YYYY"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            helperText={strings.activelyWorkingLabel}
            inputProps={{ maxLength: 7 }}
            sx={inputSx}
          />
        </Box>

        {isEdit && (
          <>
            <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />
            <Box
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}
            >
              <Typography variant="subtitle2" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                {strings.tasksLabel}
              </Typography>
              <Tooltip title={strings.addTaskLabel}>
                <IconButton size="small" onClick={handleAddTask} sx={{ color: '#667eea' }}>
                  <AddIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            {tasks.map((task, index) => (
              <Box
                key={task.id}
                sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5, mb: 0.5 }}
              >
                <TextField
                  fullWidth
                  size="small"
                  multiline
                  maxRows={3}
                  value={task.value}
                  onChange={(e) => handleTaskChange(index, e.target.value)}
                  placeholder={`${strings.tasksLabel} ${index + 1}`}
                  sx={taskInputSx}
                />
                <Tooltip title={strings.deleteLabel}>
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveTask(index)}
                    sx={{ color: '#e53935', mt: 0.5 }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            ))}
          </>
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
        <Button
          onClick={handleClose}
          disabled={submitting}
          sx={{
            fontSize: '0.85rem',
            color: 'secondary.main',
            '&:hover': { bgcolor: 'rgba(102, 126, 234, 0.1)' },
          }}
        >
          {strings.cancelLabel}
        </Button>
        <Button
          disabled={submitting || hasError}
          type="submit"
          variant="contained"
          sx={submitButtonSx}
        >
          {submitting ? (
            <CircularProgress size={18} sx={{ color: 'white' }} />
          ) : isAdd ? (
            strings.addLabel
          ) : (
            strings.saveLabel
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2,
    color: 'secondary.main',
    '& fieldset': { borderColor: 'rgba(102, 126, 234, 0.3)' },
    '&:hover fieldset': { borderColor: '#667eea' },
    '&.Mui-focused fieldset': { borderColor: '#667eea' },
  },
  '& .MuiInputBase-input': { color: 'secondary.main' },
  '& .MuiInputLabel-root': { color: 'secondary.main', opacity: 0.7 },
  '& .MuiInputLabel-root.Mui-focused': { color: '#667eea', opacity: 1 },
  '& .MuiFormHelperText-root': { color: 'secondary.main', opacity: 0.5 },
};

const taskInputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 1.5,
    color: 'secondary.main',
    fontSize: '0.875rem',
    '& fieldset': { borderColor: 'rgba(102, 126, 234, 0.2)' },
    '&:hover fieldset': { borderColor: '#667eea' },
    '&.Mui-focused fieldset': { borderColor: '#667eea' },
  },
  '& .MuiInputBase-input': { color: 'secondary.main' },
};

const submitButtonSx = {
  fontSize: '0.85rem',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
  borderRadius: 2,
  px: 3,
  minWidth: 90,
  '&:hover': {
    background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
  },
  '&.Mui-disabled': { background: 'rgba(255, 255, 255, 0.12)' },
};

export default ExperienceFormModal;
