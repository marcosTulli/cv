'use client';
import React from 'react';
import {
  Box,
  Button,
  IconButton,
  Paper,
  Slider,
  Snackbar,
  Stack,
  Typography,
  Fade,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { usePasswordGenerator } from '@/hooks';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RefreshIcon from '@mui/icons-material/Refresh';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CopyToClipboard from 'react-copy-to-clipboard';

const PasswordGenerator: React.FC = () => {
  const {
    password,
    displayCopyButton,
    disableGenerate,
    generatePassword,
    lengthInput,
    setLengthInput,
    includeUppercase,
    setIncludeUppercase,
    includeLowercase,
    setIncludeLowercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
  } = usePasswordGenerator();

  const [copied, setCopied] = React.useState(false);
  const [showSnackbar, setShowSnackbar] = React.useState(false);

  const getStrengthColor = (length: number) => {
    if (length < 8) return '#ef4444';
    if (length < 12) return '#f59e0b';
    if (length < 16) return '#22c55e';
    return '#10b981';
  };

  const getStrengthLabel = (length: number) => {
    if (length < 8) return 'Weak';
    if (length < 12) return 'Fair';
    if (length < 16) return 'Strong';
    return 'Very Strong';
  };

  const strengthColor = getStrengthColor(lengthInput);

  const handleCopy = () => {
    setCopied(true);
    setShowSnackbar(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, sm: 3, md: 4 },
        overflow: 'auto',
      }}
    >
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
        {/* Header */}
        <Box
          sx={{
            p: { xs: 2.5, sm: 3 },
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <LockIcon sx={{ fontSize: { xs: 28, sm: 32 }, color: 'white' }} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: 'primary.contrastText',
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
            }}
          >
            Password Generator
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
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
            {displayCopyButton && (
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

          {/* Length Slider */}
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
                  {lengthInput}
                </Typography>
              </Box>
            </Stack>
            <Slider
              value={lengthInput}
              onChange={(_, value) => setLengthInput(value as number)}
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

          {/* Character Options */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                color: 'secondary.main',
                fontWeight: 500,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                mb: 1.5,
              }}
            >
              Include Characters
            </Typography>
            <FormGroup
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr' },
                gap: 1,
              }}
            >
              {[
                { label: 'Uppercase (A-Z)', checked: includeUppercase, setter: setIncludeUppercase },
                { label: 'Lowercase (a-z)', checked: includeLowercase, setter: setIncludeLowercase },
                { label: 'Numbers (0-9)', checked: includeNumbers, setter: setIncludeNumbers },
                { label: 'Symbols (!@#$)', checked: includeSymbols, setter: setIncludeSymbols },
              ].map((option) => (
                <FormControlLabel
                  key={option.label}
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

          {/* Strength Indicator */}
          <Fade in={lengthInput > 0}>
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
                  {getStrengthLabel(lengthInput)}
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
                    width: `${Math.min((lengthInput / 32) * 100, 100)}%`,
                    bgcolor: strengthColor,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                  }}
                />
              </Box>
            </Box>
          </Fade>

          {/* Generate Button */}
          <Button
            variant="contained"
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
        </Box>
      </Paper>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={() => setShowSnackbar(false)}
        message="Password copied to clipboard!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          '& .MuiSnackbarContent-root': {
            bgcolor: '#22c55e',
            fontWeight: 500,
          },
        }}
      />
    </Box>
  );
};

export default PasswordGenerator;
