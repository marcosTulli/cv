'use client';
import React from 'react';
import { Box, Snackbar } from '@mui/material';
import { Display, GenerateCTA, Header, PasswordConfiguration, StrengthIndicator, Wrapper } from './components';
import { useGeneratePassword } from './hooks/useGeneratePassword';

const PasswordGenerator: React.FC = () => {
  const {showSnackbar, toggleShowSnackBar } = useGeneratePassword();
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, sm: 3, md: 4 },
        overflow: 'auto',
      }}
    >
      <Wrapper>
        <Header/>
        <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
          <Display/>
          <PasswordConfiguration/>
          <StrengthIndicator/>
          <GenerateCTA/>
        </Box>
      </Wrapper>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={toggleShowSnackBar}
        message="Password copied to clipboard!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          '& .MuiSnackbarContent-root': {
            bgcolor: '#22c55e',
            fontWeight: 500,
          },
        }}
      />
    </Box>
  );
};

export default PasswordGenerator;
