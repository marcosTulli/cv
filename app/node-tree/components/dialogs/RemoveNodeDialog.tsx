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

interface IRemoveNodeDialogProps {
  node: INode;
}
const RemoveNodeDialog: React.FC<IRemoveNodeDialogProps> = ({ node }) => {
  const { isOpenRemoveDialog } = useDialogsStore();
  const { remove } = useTree();
  const { handleCloseRemoveDialog } = useNode();
  const { strings } = languageStore();

  return (
    <React.Fragment>
      <Dialog
        open={isOpenRemoveDialog}
        onClose={handleCloseRemoveDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {strings.removeNodeDialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {strings.removeNodeConfirmation}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRemoveDialog}>
            {strings.cancelLabel}
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => remove(node.id)}
            autoFocus
          >
            {strings.acceptLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default RemoveNodeDialog;
