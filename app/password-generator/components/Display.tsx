'use client';
import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useGeneratePassword, usePasswordGeneratorComponent } from '../hooks';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Display: React.FC = () => {
  const { password } = useGeneratePassword();
  const {
    handleCopy,
    displayCopyPassword,
    passwordCopied: copied,
  } = usePasswordGeneratorComponent();

  return (
    <Box
      sx={{
        bgcolor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 2,
        p: { xs: 2, sm: 2.5 },
        mb: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
        minHeight: 85,
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.2rem' },
          color: 'secondary.main',
          wordBreak: 'break-all',
          flex: 1,
          letterSpacing: '0.5px',
        }}
      >
        {password || 'Click generate to create password'}
      </Typography>
      {displayCopyPassword && (
        <CopyToClipboard text={password} onCopy={handleCopy}>
          <IconButton
            sx={{
              color: copied ? '#22c55e' : 'secondary.main',
              transition: 'all 0.2s ease',
              flexShrink: 0,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                transform: 'scale(1.05)',
              },
            }}
          >
            {copied ? <CheckCircleIcon /> : <ContentCopyIcon />}
          </IconButton>
        </CopyToClipboard>
      )}
    </Box>
  );
};
