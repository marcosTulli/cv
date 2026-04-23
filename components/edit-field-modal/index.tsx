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
import { languageStore, userStore } from '@/store';
import { useUi } from '@/hooks';
import { useUpdateAbout, useUpdateNetwork } from '@/hooks/queries';

const isValidUrl = (value: string): boolean => {
  try {
    const u = new URL(value);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
};

const EditFieldModal: React.FC = () => {
  const { strings } = languageStore();
  const { user } = userStore();
  const { editTarget, isEditOpen, closeEdit } = useUi();
  const { currentLanguage } = languageStore();
  const networkMutation = useUpdateNetwork();
  const aboutMutation = useUpdateAbout();

  const [display, setDisplay] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [about, setAbout] = React.useState('');
  const [touched, setTouched] = React.useState(false);

  React.useEffect(() => {
    if (editTarget) {
      if (editTarget.type === 'network') {
        setDisplay(editTarget.display);
        setUrl(editTarget.url);
      }
      if (editTarget.type === 'about') {
        setAbout(editTarget.about);
      }
      setTouched(false);
    }
  }, [editTarget]);

  const isNetworkEdit = editTarget?.type === 'network';
  const isAboutEdit = editTarget?.type === 'about';
  const displayError = isNetworkEdit && touched && !display.trim();
  const urlError = isNetworkEdit && touched && (!url.trim() || !isValidUrl(url));
  const aboutError = isAboutEdit && touched && !about.trim();
  const hasError = isNetworkEdit
    ? !display.trim() || !url.trim() || !isValidUrl(url)
    : !about.trim();
  const isPending = networkMutation.isPending || aboutMutation.isPending;
  const dialogTitle = isAboutEdit ? strings.editAboutDialogTitle : strings.editNetworkDialogTitle;

  return (
    <Dialog
      component={'form'}
      onSubmit={(e) => {
        e.preventDefault();
        setTouched(true);
        if (hasError || !editTarget || !user._id) return;
        if (editTarget.type === 'network') {
          networkMutation.mutate(
            { userId: user._id, name: editTarget.name, display: display.trim(), url: url.trim() },
            {
              onSuccess: () => closeEdit(),
            },
          );
          return;
        }

        aboutMutation.mutate(
          { userId: user._id, lang: currentLanguage, about: about.trim() },
          {
            onSuccess: () => closeEdit(),
          },
        );
      }}
      open={isEditOpen}
      onClose={closeEdit}
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
        <EditIcon sx={{ color: 'white', fontSize: 24, flexShrink: 0, mt: 0.25 }} />
        <DialogTitle
          sx={{
            p: 0,
            color: 'white',
            fontWeight: 600,
            fontSize: { xs: '1rem', sm: '1.1rem' },
          }}
        >
          {dialogTitle}
        </DialogTitle>
      </Box>
      <DialogContent sx={{ pt: 3, pb: 2 }}>
        {isNetworkEdit ? (
          <>
            <TextField
              autoFocus
              required
              fullWidth
              margin="dense"
              name="display"
              label={strings.displayLabel}
              type="text"
              variant="outlined"
              value={display}
              onChange={(e) => setDisplay(e.target.value)}
              onBlur={() => setTouched(true)}
              error={displayError}
              helperText={displayError ? strings.requiredFieldError : ' '}
              inputProps={{ maxLength: 60 }}
              sx={inputSx}
            />
            <TextField
              required
              fullWidth
              margin="dense"
              name="url"
              label={strings.urlLabel}
              type="url"
              variant="outlined"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onBlur={() => setTouched(true)}
              error={urlError}
              helperText={
                urlError
                  ? !url.trim()
                    ? strings.requiredFieldError
                    : strings.invalidUrlError
                  : ' '
              }
              inputProps={{ maxLength: 200 }}
              sx={inputSx}
            />
          </>
        ) : (
          <TextField
            autoFocus
            required
            fullWidth
            multiline
            minRows={6}
            maxRows={12}
            margin="dense"
            name="about"
            label={strings.aboutLabel}
            variant="outlined"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            onBlur={() => setTouched(true)}
            error={aboutError}
            helperText={aboutError ? strings.requiredFieldError : ' '}
            inputProps={{ maxLength: 2000 }}
            sx={inputSx}
          />
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
        <Button
          onClick={closeEdit}
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
          sx={{
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
          }}
        >
          {isPending ? <CircularProgress size={18} sx={{ color: 'white' }} /> : strings.saveLabel}
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
};

export default EditFieldModal;
