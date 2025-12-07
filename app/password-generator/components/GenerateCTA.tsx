'use client';
import React from 'react';
import { Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { usePasswordGeneratorComponent, useGeneratePassword } from '../hooks';

export const GenerateCTA: React.FC = () => {
  const {generatePassword} = useGeneratePassword();
  const { disableGenerate } = usePasswordGeneratorComponent();

  return (
          <Button
            variant="contained"
            type='button'
            fullWidth
            onClick={generatePassword}
            disabled={disableGenerate}
            startIcon={<RefreshIcon />}
            sx={{
              py: { xs: 1.5, sm: 1.75 },
              fontSize: { xs: '0.95rem', sm: '1rem' },
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)',
                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.5)',
                transform: 'translateY(-1px)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
              '&.Mui-disabled': {
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.3)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            Generate Password
          </Button>
  );
};
