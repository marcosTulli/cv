'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

export const Header: React.FC = () => {
  return (
    <Box
      sx={{
        p: { xs: 2.5, sm: 3 },
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
      }}
    >
      <LockIcon sx={{ fontSize: { xs: 28, sm: 32 }, color: 'white' }} />
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: 'primary.contrastText',
          fontSize: { xs: '1.25rem', sm: '1.5rem' },
        }}
      >
        Password Generator
      </Typography>
    </Box>
  );
};
