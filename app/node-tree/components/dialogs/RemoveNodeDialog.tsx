import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNode, useTree } from '../../hooks';
import { INode } from '@/models/interfaces';
import { useDialogsStore } from '../../store';
import { languageStore } from '@/store';
import { Box } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

interface IRemoveNodeDialogProps {
  node: INode;
}
const RemoveNodeDialog: React.FC<IRemoveNodeDialogProps> = ({ node }) => {
  const { isOpenRemoveDialog } = useDialogsStore();
  const { remove } = useTree();
  const { handleCloseRemoveDialog } = useNode();
  const { strings } = languageStore();

  return (
    <Dialog
      open={isOpenRemoveDialog}
      onClose={handleCloseRemoveDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          borderRadius: 3,
          bgcolor: 'defaultBackground.paper',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          minWidth: { xs: '90%', sm: 400 },
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
        <WarningAmberIcon sx={{ color: 'white', fontSize: 24 }} />
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            p: 0,
            color: 'white',
            fontWeight: 600,
            fontSize: { xs: '1rem', sm: '1.1rem' },
          }}
        >
          {strings.removeNodeDialogTitle}
        </DialogTitle>
      </Box>
      <DialogContent sx={{ pt: 3, pb: 2 }}>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ color: 'secondary.main', opacity: 0.9 }}
        >
          {strings.removeNodeConfirmation}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
        <Button
          onClick={handleCloseRemoveDialog}
          sx={{
            fontSize: '0.85rem',
            color: 'secondary.main',
            '&:hover': {
              bgcolor: 'rgba(239, 68, 68, 0.1)',
            },
          }}
        >
          {strings.cancelLabel}
        </Button>
        <Button
          variant="contained"
          onClick={() => remove(node.id)}
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
          {strings.acceptLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default RemoveNodeDialog;
