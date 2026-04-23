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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Divider } from '@mui/material';
import { languageStore, userStore } from '@/store';
import { useUi } from '@/hooks';
import { useEducationMutations } from '@/hooks/queries';
import useJsonLoader from '@/hooks/useJsonLoader';
import LoadJsonButton from '@/components/load-json-button';
import { educationTemplate } from '@/utils/jsonTemplates';

const EducationFormModal: React.FC = () => {
  const { strings, currentLanguage: lang } = languageStore();
  const { user } = userStore();
  const { educationDialog, closeEducationDialog } = useUi();
  const mutations = useEducationMutations();
  const { loadEducation } = useJsonLoader();

  const isAdd = educationDialog.mode === 'add';
  const isEdit = educationDialog.mode === 'edit';
  const isOpen = isAdd || isEdit;
  const education = educationDialog.education;

  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isEdit && education) {
      setTitle(education.title || '');
      setContent(education.content || '');
      setUrl(education.url || '');
    } else if (isAdd) {
      setTitle('');
      setContent('');
      setUrl('');
    }
    setTouched(false);
    setSubmitting(false);
  }, [isAdd, isEdit, education]);

  const titleError = touched && !title.trim();
  const hasError = !title.trim();

  const handleClose = () => {
    if (!submitting) closeEducationDialog();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (hasError || !user._id) return;

    setSubmitting(true);

    if (isAdd) {
      mutations.addEducation.mutate(
        { userId: user._id, url: url.trim() || undefined },
        {
          onSuccess: (data) => {
            const newId = data._id;
            mutations.upsertTranslation.mutate(
              {
                userId: user._id,
                educationId: newId,
                lang,
                title: title.trim(),
                content: content.trim(),
              },
              {
                onSuccess: () => {
                  setSubmitting(false);
                  handleClose();
                },
                onError: () => setSubmitting(false),
              },
            );
          },
          onError: () => setSubmitting(false),
        },
      );
      return;
    }

    if (!education) return;

    const promises: Promise<unknown>[] = [];

    const titleChanged = title.trim() !== (education.title || '');
    const contentChanged = content.trim() !== (education.content || '');
    if (titleChanged || contentChanged) {
      promises.push(
        new Promise((resolve, reject) =>
          mutations.upsertTranslation.mutate(
            {
              userId: user._id,
              educationId: (education._id || education.id)!,
              lang,
              title: title.trim(),
              content: content.trim(),
            },
            { onSuccess: resolve, onError: reject },
          ),
        ),
      );
    }

    const urlChanged = url.trim() !== (education.url || '');
    if (urlChanged && url.trim()) {
      promises.push(
        new Promise((resolve, reject) =>
          mutations.upsertUrl.mutate(
            { userId: user._id, educationId: (education._id || education.id)!, url: url.trim() },
            { onSuccess: resolve, onError: reject },
          ),
        ),
      );
    }

    if (promises.length === 0) {
      setSubmitting(false);
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

  const modalTitle = isAdd ? strings.addEducationTitle : strings.editEducationTitle;
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
          {modalTitle}
        </DialogTitle>
      </Box>
      <DialogContent sx={{ pt: 3, pb: 2 }}>
        <TextField
          autoFocus
          required
          fullWidth
          margin="dense"
          label={strings.educationTitleLabel}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setTouched(true)}
          error={titleError}
          helperText={titleError ? strings.requiredFieldError : ' '}
          inputProps={{ maxLength: 200 }}
          sx={inputSx}
        />
        <TextField
          fullWidth
          margin="dense"
          label={strings.educationContentLabel}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline
          maxRows={4}
          inputProps={{ maxLength: 500 }}
          helperText=" "
          sx={inputSx}
        />
        <TextField
          fullWidth
          margin="dense"
          label={strings.urlLabel}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          inputProps={{ maxLength: 200 }}
          helperText=" "
          sx={inputSx}
        />
        {isAdd && (
          <>
            <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
              <LoadJsonButton
                onLoad={loadEducation}
                onLoadSuccess={handleClose}
                template={educationTemplate}
              />
            </Box>
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

export default EducationFormModal;
