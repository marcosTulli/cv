import React, { PropsWithChildren } from 'react';
import { Box, Typography } from '@mui/material';

interface TreeControlProps extends PropsWithChildren {
  label: string;
}

export const TreeControl: React.FC<TreeControlProps> = ({ label, children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        bgcolor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 2,
        px: 1.5,
        py: 0.5,
      }}
    >
      <Typography
        component="label"
        display={{ xs: 'none', sm: 'block' }}
        sx={{
          color: 'white',
          fontSize: { xs: '0.85rem', sm: '0.9rem' },
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
};
