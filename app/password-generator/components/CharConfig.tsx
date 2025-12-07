'use client';
import React from 'react';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { usePasswordConfig } from '../hooks';

export const CharConfig: React.FC = () => {
  const {charConfig} = usePasswordConfig()

  return (
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                color: 'secondary.main',
                fontWeight: 500,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                mb: 1.5,
              }}
            >
              with Characters
            </Typography>
            <FormGroup
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr' },
                gap: 1,
              }}
            >
              {charConfig.map((option) => (
                <FormControlLabel
                  key={option.key}
                  control={
                    <Checkbox
                      checked={option.checked}
                      onChange={(e) => option.setter(e.target.checked)}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.3)',
                        '&.Mui-checked': {
                          color: '#667eea',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        color: 'secondary.main',
                      }}
                    >
                      {option.label}
                    </Typography>
                  }
                  sx={{
                    m: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.15)',
                    borderRadius: 1.5,
                    px: 1,
                    py: 0.5,
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.25)',
                    },
                  }}
                />
              ))}
            </FormGroup>
          </Box>

  );
};
