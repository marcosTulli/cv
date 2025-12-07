'use client';
import React from 'react';
import { Box, Stack, Typography, Fade } from '@mui/material';
import { useGeneratePassword } from '../hooks/useGeneratePassword';
import { usePasswordConfig } from '../hooks';

export const StrengthIndicator: React.FC = () => {
  const { getStrengthLabel, strengthColor} = useGeneratePassword()
  const { length } = usePasswordConfig()

  return (
          <Fade in={length > 0}>
            <Box sx={{ mb: 3 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <Typography
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  }}
                >
                  Strength
                </Typography>
                <Typography
                  sx={{
                    color: strengthColor,
                    fontWeight: 600,
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  }}
                >
                  {getStrengthLabel(length)}
                </Typography>
              </Stack>
              <Box
                sx={{
                  height: 6,
                  borderRadius: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: `${Math.min((length / 32) * 100, 100)}%`,
                    bgcolor: strengthColor,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                  }}
                />
              </Box>
            </Box>
          </Fade>

  );
};