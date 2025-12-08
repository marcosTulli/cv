import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDialogsStore } from '../../store';
import { Box } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useNode } from '../../hooks';

export const ClearTreeDialog: React.FC = () => {
  const { isOpenClearTreeDialog, closeClearTreeDialog } = useDialogsStore();
  const { clearTree } = useNode();

  return (
    <Dialog
      open={isOpenClearTreeDialog}
      onClose={closeClearTreeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
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
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <WarningAmberIcon sx={{ color: 'white', fontSize: 24, flexShrink: 0, mt: 0.25 }} />
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            p: 0,
            color: 'white',
            fontWeight: 600,
            fontSize: { xs: '1rem', sm: '1.1rem' },
          }}
        >
          Clear Tree
        </DialogTitle>
      </Box>
      <DialogContent sx={{ pt: 3, pb: 2 }}>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ color: 'secondary.main', opacity: 0.9 }}
        >
          Are you sure you want to remove all nodes?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
        <Button
          onClick={closeClearTreeDialog}
          sx={{
            fontSize: '0.85rem',
            color: 'secondary.main',
            '&:hover': {
              bgcolor: 'rgba(239, 68, 68, 0.1)',
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={clearTree}
          autoFocus
          sx={{
            fontSize: '0.85rem',
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            boxShadow: '0 2px 8px rgba(239, 68, 68, 0.3)',
            borderRadius: 2,
            px: 3,
            '&:hover': {
              background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)',
            },
          }}
        >
          Clear
        </Button>
      </DialogActions>
    </Dialog>
  );
};
