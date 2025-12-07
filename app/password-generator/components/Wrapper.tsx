'use client';

import React, { PropsWithChildren } from 'react';
import { Paper } from '@mui/material';

export const Wrapper : React.FC<PropsWithChildren> = ({children}) => {
  return (
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 480, md: 560 },
          borderRadius: { xs: 3, sm: 4 },
          overflow: 'hidden',
          backgroundColor:'defaultBackground.paper',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {children}
      </Paper>

  );
};

