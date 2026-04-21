'use client';
import React from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { languageStore } from '@/store';

interface LoadJsonModalProps {
  open: boolean;
  onClose: () => void;
  onLoad: (data: unknown) => Promise<void>;
  template: string;
  title?: string;
}

const LoadJsonModal: React.FC<LoadJsonModalProps> = ({ open, onClose, onLoad, template, title }) => {
  const { strings } = languageStore();
  const [json, setJson] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setJson('');
      setError('');
      setLoading(false);
    }
  }, [open]);

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(template);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    let parsed: unknown;
    try {
      parsed = JSON.parse(json);
    } catch {
      setError(strings.jsonParseError || 'Invalid JSON');
      return;
    }

    setLoading(true);
    try {
      await onLoad(parsed);
      onClose();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : strings.jsonParseError || 'Something went wrong';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      component="form"
      onSubmit={handleSubmit}
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 3,
          bgcolor: 'defaultBackground.paper',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          m: { xs: 2, sm: 3 },
        },
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          p: 2,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
        }}
      >
        <DataObjectIcon sx={{ color: 'white', fontSize: 24, flexShrink: 0, mt: 0.25 }} />
        <DialogTitle
          sx={{ p: 0, color: 'white', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}
        >
          {title || strings.loadJsonTitle}
        </DialogTitle>
      </Box>
      <DialogContent sx={{ pt: 3, pb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="caption" sx={{ color: 'secondary.main', opacity: 0.6 }}>
            {strings.jsonTemplateLabel}:
          </Typography>
          <Tooltip title={strings.jsonTemplateLabel}>
            <Button
              size="small"
              startIcon={<ContentCopyIcon sx={{ fontSize: 14 }} />}
              onClick={handleCopyTemplate}
              sx={{ color: '#667eea', textTransform: 'none', fontSize: '0.75rem' }}
            >
              {strings.jsonTemplateLabel}
            </Button>
          </Tooltip>
        </Box>
        <TextField
          fullWidth
          multiline
          minRows={8}
          maxRows={20}
          value={json}
          onChange={(e) => setJson(e.target.value)}
          placeholder={template}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              color: 'secondary.main',
              fontFamily: 'monospace',
              fontSize: '0.8rem',
              '& fieldset': { borderColor: 'rgba(102, 126, 234, 0.3)' },
              '&:hover fieldset': { borderColor: '#667eea' },
              '&.Mui-focused fieldset': { borderColor: '#667eea' },
            },
            '& .MuiInputBase-input': { color: 'secondary.main' },
          }}
        />
        {error && (
          <Alert severity="error" sx={{ mt: 1 }}>
            {error}
          </Alert>
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
        <Button
          onClick={onClose}
          disabled={loading}
          sx={{
            fontSize: '0.85rem',
            color: 'secondary.main',
            '&:hover': { bgcolor: 'rgba(102, 126, 234, 0.1)' },
          }}
        >
          {strings.cancelLabel}
        </Button>
        <Button
          disabled={loading || !json.trim()}
          type="submit"
          variant="contained"
          sx={{
            fontSize: '0.85rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
            borderRadius: 2,
            px: 3,
            minWidth: 90,
            '&:hover': {
              background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
            },
            '&.Mui-disabled': { background: 'rgba(255, 255, 255, 0.12)' },
          }}
        >
          {loading ? <CircularProgress size={18} sx={{ color: 'white' }} /> : strings.loadJsonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoadJsonModal;
