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
import useJsonLoader from '@/hooks/useJsonLoader';
import LoadJsonButton from '@/components/load-json-button';
import { experiencesTemplate } from '@/utils/jsonTemplates';
import { isEndDateBeforeStartDate } from '@/utils/dateValidation';

interface TaskField {
  id: string;
  value: string;
  isNew: boolean;
}

interface TaskPair {
  id: string;
  en: string;
  es: string;
}

const ExperienceFormModal: React.FC = () => {
  const { strings, currentLanguage: lang } = languageStore();
  const { user } = userStore();
  const { experienceDialog, closeExperienceDialog } = useUi();
  const mutations = useExperienceMutations();
  const { loadExperiences } = useJsonLoader();

  const isAdd = experienceDialog.mode === 'add';
  const isEdit = experienceDialog.mode === 'edit';
  const isOpen = isAdd || isEdit;
  const experience = experienceDialog.experience;

  const [companyName, setCompanyName] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  // Add mode: both languages
  const [positionEn, setPositionEn] = React.useState('');
  const [positionEs, setPositionEs] = React.useState('');
  const [taskPairs, setTaskPairs] = React.useState<TaskPair[]>([]);

  // Edit mode: current language only
  const [editPosition, setEditPosition] = React.useState('');
  const [editTasks, setEditTasks] = React.useState<TaskField[]>([]);
  const originalTasksRef = React.useRef<{ _id: string; task: string }[]>([]);

  React.useEffect(() => {
    if (isEdit && experience) {
      setCompanyName(experience.companyName || '');
      setStartDate(experience.activePeriod?.startDate || '');
      setEndDate(experience.activePeriod?.endDate || '');
      setEditPosition(experience.info?.position || '');
      const origTasks = experience.info?.tasks || [];
      originalTasksRef.current = origTasks;
      setEditTasks(origTasks.map((t) => ({ id: t._id, value: t.task, isNew: false })));
    } else if (isAdd) {
      setCompanyName('');
      setStartDate('');
      setEndDate('');
      setPositionEn('');
      setPositionEs('');
      setTaskPairs([]);
    }
    setTouched(false);
    setSubmitting(false);
  }, [isAdd, isEdit, experience]);

  const companyNameError = touched && !companyName.trim();
  const startDateError = touched && !startDate.trim();
  const endDateError = touched && isEndDateBeforeStartDate(startDate.trim(), endDate.trim());
  const hasError = !companyName.trim() || !startDate.trim() || isEndDateBeforeStartDate(startDate.trim(), endDate.trim());

  const handleClose = () => {
    if (!submitting) closeExperienceDialog();
  };

  // Add mode: task pair helpers
  const handleAddTaskPair = () => {
    setTaskPairs((prev) => [...prev, { id: `new-${Date.now()}`, en: '', es: '' }]);
  };

  const handleTaskPairChange = (index: number, lang: 'en' | 'es', value: string) => {
    setTaskPairs((prev) => prev.map((p, i) => (i === index ? { ...p, [lang]: value } : p)));
  };

  const handleRemoveTaskPair = (index: number) => {
    setTaskPairs((prev) => prev.filter((_, i) => i !== index));
  };

  // Edit mode: task helpers
  const handleEditTaskChange = (index: number, value: string) => {
    setEditTasks((prev) => prev.map((t, i) => (i === index ? { ...t, value } : t)));
  };

  const handleRemoveEditTask = (index: number) => {
    setEditTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddEditTask = () => {
    setEditTasks((prev) => [...prev, { id: `new-${Date.now()}`, value: '', isNew: true }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (hasError || !user._id) return;

    if (isAdd) {
      setSubmitting(true);
      const info: Record<string, { position: string; tasks?: { task: string }[] }> = {};

      const enTasks = taskPairs.filter((p) => p.en.trim()).map((p) => ({ task: p.en.trim() }));
      const esTasks = taskPairs.filter((p) => p.es.trim()).map((p) => ({ task: p.es.trim() }));

      if (positionEn.trim() || enTasks.length) {
        info.en = { position: positionEn.trim(), tasks: enTasks.length ? enTasks : undefined };
      }
      if (positionEs.trim() || esTasks.length) {
        info.es = { position: positionEs.trim(), tasks: esTasks.length ? esTasks : undefined };
      }

      mutations.addExperience.mutate(
        {
          userId: user._id,
          companyName: companyName.trim(),
          activePeriod: startDate.trim()
            ? { startDate: startDate.trim(), endDate: endDate.trim() || undefined }
            : undefined,
          info: Object.keys(info).length > 0 ? info : undefined,
        },
        {
          onSuccess: () => {
            setSubmitting(false);
            handleClose();
          },
          onError: () => setSubmitting(false),
        },
      );
      return;
    }

    // Edit flow: per-field patches
    if (!experience) return;
    setSubmitting(true);
    const expId = experience._id;
    const promises: Promise<unknown>[] = [];

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

    if (
      startDate.trim() !== (experience.activePeriod?.startDate || '') ||
      endDate.trim() !== (experience.activePeriod?.endDate || '')
    ) {
      promises.push(
        new Promise((resolve, reject) =>
          mutations.patchActivePeriod.mutate(
            { userId: user._id, experienceId: expId, startDate: startDate.trim(), endDate: endDate.trim() },
            { onSuccess: resolve, onError: reject },
          ),
        ),
      );
    }

    if (editPosition.trim() !== (experience.info?.position || '')) {
      promises.push(
        new Promise((resolve, reject) =>
          mutations.upsertInfo.mutate(
            { userId: user._id, experienceId: expId, lang, position: editPosition.trim() },
            { onSuccess: resolve, onError: reject },
          ),
        ),
      );
    }

    const originals = originalTasksRef.current;
    const currentIds = new Set(editTasks.filter((t) => !t.isNew).map((t) => t.id));

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

    for (const task of editTasks) {
      if (task.isNew) continue;
      const orig = originals.find((o) => o._id === task.id);
      if (orig && task.value.trim() !== orig.task) {
        promises.push(
          new Promise((resolve, reject) =>
            mutations.patchTask.mutate(
              { userId: user._id, experienceId: expId, lang, taskId: task.id, task: task.value.trim() },
              { onSuccess: resolve, onError: reject },
            ),
          ),
        );
      }
    }

    for (const task of editTasks) {
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
      // errors shown via snackbar
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
            onBlur={() => setTouched(true)}
            error={endDateError}
            helperText={endDateError ? strings.endDateBeforeStartError : strings.activelyWorkingLabel}
            inputProps={{ maxLength: 7 }}
            sx={inputSx}
          />
        </Box>

        {isAdd && (
          <>
            <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />
            <TextField
              fullWidth
              margin="dense"
              label={`${strings.positionLabel} (EN)`}
              value={positionEn}
              onChange={(e) => setPositionEn(e.target.value)}
              inputProps={{ maxLength: 100 }}
              helperText=" "
              sx={inputSx}
            />
            <TextField
              fullWidth
              margin="dense"
              label={`${strings.positionLabel} (ES)`}
              value={positionEs}
              onChange={(e) => setPositionEs(e.target.value)}
              inputProps={{ maxLength: 100 }}
              helperText=" "
              sx={inputSx}
            />

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1, mt: 1 }}>
              <Typography variant="subtitle2" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                {strings.tasksLabel}
              </Typography>
              <Tooltip title={strings.addTaskLabel}>
                <IconButton size="small" onClick={handleAddTaskPair} sx={{ color: '#667eea' }}>
                  <AddIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            {taskPairs.map((pair, index) => (
              <React.Fragment key={pair.id}>
                {index > 0 && <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.06)' }} />}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5, mb: 0.5 }}>
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <TextField
                      fullWidth
                      size="small"
                      multiline
                      maxRows={3}
                      value={pair.en}
                      onChange={(e) => handleTaskPairChange(index, 'en', e.target.value)}
                      placeholder={`EN — ${strings.tasksLabel} ${index + 1}`}
                      sx={taskInputSx}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      multiline
                      maxRows={3}
                      value={pair.es}
                      onChange={(e) => handleTaskPairChange(index, 'es', e.target.value)}
                      placeholder={`ES — ${strings.tasksLabel} ${index + 1}`}
                      sx={taskInputSx}
                    />
                  </Box>
                  <Tooltip title={strings.deleteLabel}>
                    <IconButton
                      size="small"
                      onClick={() => handleRemoveTaskPair(index)}
                      sx={{ color: '#e53935', mt: 0.5 }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </React.Fragment>
            ))}

            <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
              <LoadJsonButton onLoad={loadExperiences} onLoadSuccess={handleClose} template={experiencesTemplate} />
            </Box>
          </>
        )}

        {isEdit && (
          <>
            <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />
            <TextField
              fullWidth
              margin="dense"
              label={strings.positionLabel}
              value={editPosition}
              onChange={(e) => setEditPosition(e.target.value)}
              inputProps={{ maxLength: 100 }}
              helperText=" "
              sx={inputSx}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="subtitle2" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                {strings.tasksLabel}
              </Typography>
              <Tooltip title={strings.addTaskLabel}>
                <IconButton size="small" onClick={handleAddEditTask} sx={{ color: '#667eea' }}>
                  <AddIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            {editTasks.map((task, index) => (
              <Box key={task.id} sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5, mb: 0.5 }}>
                <TextField
                  fullWidth
                  size="small"
                  multiline
                  maxRows={3}
                  value={task.value}
                  onChange={(e) => handleEditTaskChange(index, e.target.value)}
                  placeholder={`${strings.tasksLabel} ${index + 1}`}
                  sx={taskInputSx}
                />
                <Tooltip title={strings.deleteLabel}>
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveEditTask(index)}
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
        <Button disabled={submitting || hasError} type="submit" variant="contained" sx={submitButtonSx}>
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
