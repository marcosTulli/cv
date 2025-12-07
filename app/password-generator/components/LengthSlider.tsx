'use client';
import React from 'react';
import { Box, Slider, Stack, Typography } from '@mui/material';
import { useGeneratePassword } from '../hooks/useGeneratePassword';

export const LengthSlider: React.FC = () => {
  const {length, setLength} = useGeneratePassword();

  return (
        <Box sx={{ mb: 3 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
          >
            <Typography
              sx={{
                color: 'secondary.main',
                fontWeight: 500,
                fontSize: { xs: '0.9rem', sm: '1rem' },
              }}
            >
              Password Length
            </Typography>
            <Box
              sx={{
                bgcolor: 'rgba(102, 126, 234, 0.2)',
                px: 2,
                py: 0.5,
                borderRadius: 2,
                minWidth: 48,
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  color: '#667eea',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                }}
              >
                {length}
              </Typography>
            </Box>
          </Stack>
          <Slider
            value={length}
            onChange={(_, value) => setLength(value as number)}
            min={4}
            max={32}
            sx={{
              color: '#667eea',
              height: 8,
              '& .MuiSlider-thumb': {
                width: { xs: 20, sm: 24 },
                height: { xs: 20, sm: 24 },
                bgcolor: 'white',
                border: '3px solid #667eea',
                '&:hover, &.Mui-active': {
                  boxShadow: '0 0 0 8px rgba(102, 126, 234, 0.2)',
                },
              },
              '& .MuiSlider-track': {
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
              },
              '& .MuiSlider-rail': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          />
        </Box>
  );
};

