import React from 'react';
import { Box, Typography } from '@mui/material';

interface NavigationItemProps {
  children: React.ReactNode;
  label: string;
}
export const NavigationItem: React.FC<NavigationItemProps> = ({
  children,
  label,
}) => {
  return (
    <Box>
      <Typography
        display={{
          xs: 'none',
          sm: 'none',
          md: 'flex',
        }}
      >
        {label}
      </Typography>
      <Box display={{ sm: 'flex', md: 'none' }}>{children}</Box>
    </Box>
  );
};
