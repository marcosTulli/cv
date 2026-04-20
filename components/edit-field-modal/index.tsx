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
import { useUpdateNetwork } from '@/hooks/queries';

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
  const { mutate, isPending } = useUpdateNetwork();

  const [display, setDisplay] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [touched, setTouched] = React.useState(false);

  React.useEffect(() => {
    if (editTarget) {
      setDisplay(editTarget.display);
      setUrl(editTarget.url);
      setTouched(false);
    }
  }, [editTarget]);

  const displayError = touched && !display.trim();
  const urlError = touched && (!url.trim() || !isValidUrl(url));
  const hasError = !display.trim() || !url.trim() || !isValidUrl(url);

  return (
    <Dialog
      component={'form'}
      onSubmit={(e) => {
        e.preventDefault();
        setTouched(true);
        if (hasError || !editTarget || !user._id) return;
        mutate(
          { userId: user._id, name: editTarget.name, display: display.trim(), url: url.trim() },
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
          {strings.editNetworkDialogTitle}
        </DialogTitle>
      </Box>
      <DialogContent sx={{ pt: 3, pb: 2 }}>
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
            urlError ? (!url.trim() ? strings.requiredFieldError : strings.invalidUrlError) : ' '
          }
          inputProps={{ maxLength: 200 }}
          sx={inputSx}
        />
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
