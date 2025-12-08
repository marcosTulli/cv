import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNode, useTree } from '../../hooks';
import { INode } from '@/models/interfaces';
import { useDialogsStore } from '../../store';
import { Box } from '@mui/material';
import useRootNode from '../../hooks/useRootNode';
import { languageStore } from '@/store';
import AddIcon from '@mui/icons-material/Add';

interface ICreateNodeDialogProps {
  node: INode;
}

const CreateNodeDialog: React.FC<ICreateNodeDialogProps> = ({ node }) => {
  const { isOpenCreateDialog } = useDialogsStore();
  const { handleCloseCreateDialog, handleInput, title, disableSubmit } =
    useNode();
  const { rootNode } = useRootNode();
  const { create } = useTree();
  const { strings } = languageStore();

  return (
    <Dialog
      component={'form'}
      onSubmit={(e) => {
        e.preventDefault();
        create({ title, node, rootNode: rootNode as INode });
      }}
      open={isOpenCreateDialog}
      onClose={handleCloseCreateDialog}
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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <AddIcon sx={{ color: 'white', fontSize: 24 }} />
        <DialogTitle
          sx={{
            p: 0,
            color: 'white',
            fontWeight: 600,
            fontSize: { xs: '1rem', sm: '1.1rem' },
          }}
        >
          {strings.createNodeDialogTitle}
        </DialogTitle>
      </Box>
      <DialogContent sx={{ pt: 3, pb: 2 }}>
        <TextField
          autoFocus
          required
          fullWidth
          margin="dense"
          id="name"
          name="name"
          label={strings.nameLabel}
          type="text"
          variant="outlined"
          onChange={handleInput}
          inputProps={{ maxLength: 30 }}
          helperText={`${title.length}/30`}
          FormHelperTextProps={{
            sx: {
              textAlign: 'right',
              color: title.length >= 25 ? '#f59e0b' : 'secondary.main',
              opacity: 0.7,
              fontSize: '0.75rem',
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              color: 'secondary.main',
              '& fieldset': {
                borderColor: 'rgba(102, 126, 234, 0.3)',
              },
              '&:hover fieldset': {
                borderColor: '#667eea',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#667eea',
              },
            },
            '& .MuiInputBase-input': {
              color: 'secondary.main',
            },
            '& .MuiInputLabel-root': {
              color: 'secondary.main',
              opacity: 0.7,
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#667eea',
              opacity: 1,
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
        <Button
          onClick={handleCloseCreateDialog}
          sx={{
            fontSize: '0.85rem',
            color: 'secondary.main',
            '&:hover': {
              bgcolor: 'rgba(102, 126, 234, 0.1)',
            },
          }}
        >
          {strings.cancelLabel}
        </Button>
        <Button
          disabled={disableSubmit}
          type="submit"
          variant="contained"
          sx={{
            fontSize: '0.85rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
            borderRadius: 2,
            px: 3,
            '&:hover': {
              background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
            },
            '&.Mui-disabled': {
              background: 'rgba(255, 255, 255, 0.12)',
            },
          }}
        >
          {strings.createNodeButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CreateNodeDialog;
