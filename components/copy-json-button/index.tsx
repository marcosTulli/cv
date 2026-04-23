'use client';
import React from 'react';
import { Button, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { languageStore } from '@/store';
import { uiStore } from '@/store';

interface CopyJsonButtonProps {
  data: unknown;
  transform?: (data: unknown) => unknown;
}

const CopyJsonButton: React.FC<CopyJsonButtonProps> = ({ data, transform }) => {
  const { strings } = languageStore();
  const showSnackbar = uiStore((state) => state.showSnackbar);

  const handleCopy = () => {
    const stripped = JSON.parse(
      JSON.stringify(data, (key, value: unknown) => {
        if (key === '_id' || key === 'id') return undefined;
        return value;
      }),
    ) as unknown;
    const cleaned = transform ? transform(stripped) : stripped;
    navigator.clipboard.writeText(JSON.stringify(cleaned, null, 2));
    showSnackbar(strings.jsonCopiedSuccess || 'JSON copied to clipboard', 'success');
  };

  return (
    <Tooltip title={strings.copyJsonLabel}>
      <Button
        size="small"
        startIcon={<ContentCopyIcon sx={{ fontSize: 14 }} />}
        onClick={handleCopy}
        sx={{
          color: '#667eea',
          textTransform: 'none',
          fontSize: '0.75rem',
          minWidth: 'auto',
        }}
      >
        {strings.copyJsonLabel}
      </Button>
    </Tooltip>
  );
};

export default CopyJsonButton;
