'use client';
import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useUi } from '@/hooks';

const GlobalSnackbar: React.FC = () => {
  const { snackbar, closeSnackbar } = useUi();

  return (
    <Snackbar
      open={snackbar.isOpen}
      autoHideDuration={3000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={closeSnackbar}
        severity={snackbar.severity}
        variant="filled"
        sx={{ width: '100%', fontWeight: 500 }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default GlobalSnackbar;
