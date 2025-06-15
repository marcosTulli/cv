'use client';
import { useAuth0 } from '@auth0/auth0-react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions, Button,
    useTheme, useMediaQuery
} from '@mui/material';
import { useAdminDialogStore } from '../hooks/useAdminDialog';

export default function AdminDialog() {
    const { isOpen, toggle } = useAdminDialogStore();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

    const handleLogin = () =>
        loginWithRedirect({ connection: 'google-oauth2' }); // 👈 Google only

    return (
        <Dialog fullScreen={fullScreen} open={isOpen} onClose={toggle}>
            <DialogTitle>Admin Login</DialogTitle>
            <DialogContent>
                {isLoading && <p>Checking authentication...</p>}
                {!isLoading && isAuthenticated ? (
                    <>
                        <p>You are logged in as {user?.email}</p>
                        <Button variant="contained" onClick={() => logout({ returnTo: window.location.origin })}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <Button variant="contained" onClick={handleLogin}>
                        Login with Google
                    </Button>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={toggle}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}
