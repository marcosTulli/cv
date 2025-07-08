'use client';

import { useAuth0 } from '@auth0/auth0-react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    Typography,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { useAdminDialogStore } from '../hooks/useAdminDialog';
import { useUser } from '@/hooks/queries';
import { languageStore } from '@/store';

export default function AdminDialog() {
    const { isOpen, toggle } = useAdminDialogStore();
    const theme = useTheme(); // Uses MUI theme from ThemeProvider
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();
    const { isAdmin } = useUser();
    const handleLogin = () => loginWithRedirect();
    const { strings } = languageStore();


    return (
        <Dialog
            fullScreen={fullScreen}
            open={isOpen}
            onClose={toggle}
            PaperProps={{
                sx: {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.secondary.main,
                    padding: theme.spacing(2),
                },
            }}
        >
            <DialogTitle sx={{ fontSize: '2rem' }}>
                {strings.adminDialogTitle}
            </DialogTitle>

            <DialogContent>
                {!isLoading && isAuthenticated ? (
                    <Box sx={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: '1.5rem' }}>
                            {strings.adminDialogContent} {user?.name}
                        </Typography>
                        <Typography sx={{ fontSize: '1rem', display: 'flex', gap: '0.5rem' }}>
                            <p>{strings.adminDialogRoleLabel}: </p>
                            {isAdmin
                                ? strings.admin
                                : strings.guest}
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() =>
                                logout({ logoutParams: { returnTo: window.location.origin } })
                            }
                        >
                            {strings.logoutButtonLabel}
                        </Button>
                    </Box>
                ) : (
                    <Button variant="contained" onClick={handleLogin}>
                        {strings.loginButtonLabel}
                    </Button>
                )}
            </DialogContent>

            <DialogActions>
                <Button sx={{ color: 'secondary.main' }} onClick={toggle}>
                    {strings.closeDialogLabel}</Button>
            </DialogActions>
        </Dialog>
    );
}
