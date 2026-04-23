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
  TextField,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Divider } from '@mui/material';
import { languageStore, userStore } from '@/store';
import { useUi } from '@/hooks';
import { useSkillMutations } from '@/hooks/queries';
import useJsonLoader from '@/hooks/useJsonLoader';
import LoadJsonButton from '@/components/load-json-button';
import { skillsTemplate } from '@/utils/jsonTemplates';

const SkillFormModal: React.FC = () => {
  const { strings } = languageStore();
  const { user } = userStore();
  const { skillDialog, closeSkillDialog } = useUi();
  const { addSkill, patchSkill } = useSkillMutations();
  const { loadSkills } = useJsonLoader();

  const isAdd = skillDialog.mode === 'add';
  const isEdit = skillDialog.mode === 'edit';
  const isOpen = isAdd || isEdit;
  const skill = skillDialog.skill;

  const [name, setName] = React.useState('');
  const [formattedName, setFormattedName] = React.useState('');
  const [touched, setTouched] = React.useState(false);

  React.useEffect(() => {
    if (isEdit && skill) {
      setName(skill.name || '');
      setFormattedName(skill.formattedName || '');
    } else if (isAdd) {
      setName('');
      setFormattedName('');
    }
    setTouched(false);
  }, [isAdd, isEdit, skill]);

  const nameError = touched && !name.trim();
  const formattedNameError = touched && !formattedName.trim();
  const hasError = !name.trim() || !formattedName.trim();
  const isPending = addSkill.isPending || patchSkill.isPending;

  const handleClose = () => {
    if (!isPending) closeSkillDialog();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (hasError || !user._id) return;

    if (isAdd) {
      addSkill.mutate(
        { userId: user._id, name: name.trim(), formattedName: formattedName.trim() },
        { onSuccess: handleClose },
      );
    } else if (isEdit && skill) {
      const noChanges =
        name.trim() === (skill.name || '') && formattedName.trim() === (skill.formattedName || '');

      if (noChanges) {
        handleClose();
        return;
      }

      patchSkill.mutate(
        {
          userId: user._id,
          skillId: String(skill._id),
          name: name.trim(),
          formattedName: formattedName.trim(),
        },
        { onSuccess: handleClose },
      );
    }
  };

  const title = isAdd ? strings.addSkillTitle : strings.editSkillTitle;
  const TitleIcon = isAdd ? AddIcon : EditIcon;

  return (
    <Dialog
      component="form"
      onSubmit={handleSubmit}
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: 3,
          bgcolor: 'defaultBackground.paper',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          m: { xs: 2, sm: 3 },
          width: { xs: 'calc(100% - 32px)', sm: 400 },
          maxWidth: { xs: 'calc(100% - 32px)', sm: 400 },
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
          label={strings.formattedNameLabel}
          value={formattedName}
          onChange={(e) => setFormattedName(e.target.value)}
          onBlur={() => setTouched(true)}
          error={formattedNameError}
          helperText={formattedNameError ? strings.requiredFieldError : ' '}
          inputProps={{ maxLength: 60 }}
          sx={inputSx}
        />
        <TextField
          required
          fullWidth
          margin="dense"
          label={strings.skillNameLabel}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched(true)}
          error={nameError}
          helperText={nameError ? strings.requiredFieldError : '/icons/{name}.svg'}
          inputProps={{ maxLength: 60 }}
          sx={inputSx}
        />
        {name.trim() && (
          <Typography variant="caption" sx={{ color: 'secondary.main', opacity: 0.6, mt: 0.5 }}>
            Icon path: /icons/{name.trim()}.svg
          </Typography>
        )}
        {isAdd && (
          <>
            <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
              <LoadJsonButton
                onLoad={loadSkills}
                onLoadSuccess={handleClose}
                template={skillsTemplate}
              />
            </Box>
          </>
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
        <Button
          onClick={handleClose}
          disabled={isPending}
          sx={{
            fontSize: '0.85rem',
            color: 'secondary.main',
            '&:hover': { bgcolor: 'rgba(102, 126, 234, 0.1)' },
          }}
        >
          {strings.cancelLabel}
        </Button>
        <Button
          disabled={isPending || hasError}
          type="submit"
          variant="contained"
          sx={submitButtonSx}
        >
          {isPending ? (
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

export default SkillFormModal;
