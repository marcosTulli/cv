"use strict"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useAdminDialogStore } from '../hooks/useAdminDialog';

export default function AdminDialog() {
    const { isOpen, toggle } = useAdminDialogStore();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            fullScreen={fullScreen}
            open={isOpen}
            onClose={toggle}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                Login
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Admin Login
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={toggle}>
                    Secondary
                </Button>
                <Button onClick={toggle} autoFocus>
                    Primary
                </Button>
            </DialogActions>
        </Dialog>
    );
}
