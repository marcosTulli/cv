'use client';
import React from 'react';
import { Button, Tooltip, Fade } from '@mui/material';

interface IButtonComponentProps {
  onClick: () => void;
  display: boolean;
  variant: 'outlined' | 'contained' | 'text';
  disabled?: boolean;
  title: string;
}
const ButtonComponent: React.FC<React.PropsWithChildren & IButtonComponentProps> = ({
  children,
  onClick,
  display,
  variant,
  disabled,
  title,
}) => {
  const getVariantStyles = () => {
    if (variant === 'contained') {
      return {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
        border: 'none',
        '&:hover': {
          background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)',
          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
          transform: 'translateY(-1px)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      };
    }
    if (variant === 'outlined') {
      return {
        borderColor: 'rgba(102, 126, 234, 0.5)',
        color: '#667eea',
        bgcolor: 'rgba(102, 126, 234, 0.08)',
        '&:hover': {
          borderColor: '#667eea',
          bgcolor: 'rgba(102, 126, 234, 0.15)',
          transform: 'translateY(-1px)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      };
    }
    return {
      color: 'secondary.main',
      '&:hover': {
        bgcolor: 'rgba(102, 126, 234, 0.1)',
      },
    };
  };

  if (!display) {
    return null;
  }

  const button = (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      sx={{
        minWidth: { xs: '22px', sm: '28px' },
        minHeight: { xs: '22px', sm: '28px' },
        p: { xs: '4px', sm: '6px' },
        m: '0',
        borderRadius: 1.5,
        transition: 'all 0.2s ease',
        ...getVariantStyles(),
      }}
    >
      {children}
    </Button>
  );

  return (
    <Tooltip title={title} arrow>
      <span style={{ display: 'inline-flex' }}>{button}</span>
    </Tooltip>
  );
};

export default ButtonComponent;
