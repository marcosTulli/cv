'use client';
import React from 'react';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { useGeneratePassword } from '../hooks/useGeneratePassword';
import { PasswordConfigKeys } from '../store/passwordConfigStore';

export const CharConfig: React.FC = () => {
  const { passwordConfig, setWithLowercase, setWithNumbers, setWithSymbols, setWithUppercase } = useGeneratePassword();
  const {  withNumbers, withLowercase, withSymbols, withUppercase} = passwordConfig;

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
              {[
                { label: 'Uppercase (A-Z)', key:PasswordConfigKeys.withUppercase, checked: withUppercase, setter: setWithUppercase },
                { label: 'Lowercase (a-z)', key:PasswordConfigKeys.withLowercase,checked: withLowercase, setter: setWithLowercase },
                { label: 'Numbers (0-9)', key:PasswordConfigKeys.withNumbers, checked: withNumbers, setter: setWithNumbers },
                { label: 'Symbols (!@#$)', key:PasswordConfigKeys.withSymbols ,checked: withSymbols, setter: setWithSymbols },
              ].map((option) => (
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
