'use client';
import React from 'react';
import { Button, Tooltip } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import { languageStore } from '@/store';
import LoadJsonModal from '@/components/load-json-modal';

interface LoadJsonButtonProps {
  onLoad: (data: unknown) => Promise<void>;
  onLoadSuccess?: () => void;
  template: string;
  loadTitle?: string;
}

const LoadJsonButton: React.FC<LoadJsonButtonProps> = ({
  onLoad,
  onLoadSuccess,
  template,
  loadTitle,
}) => {
  const { strings } = languageStore();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Tooltip title={strings.loadJsonLabel}>
        <Button
          size="small"
          startIcon={<UploadIcon sx={{ fontSize: 14 }} />}
          onClick={() => setOpen(true)}
          sx={{
            color: '#667eea',
            textTransform: 'none',
            fontSize: '0.75rem',
            minWidth: 'auto',
          }}
        >
          {strings.loadJsonLabel}
        </Button>
      </Tooltip>
      <LoadJsonModal
        open={open}
        onClose={() => setOpen(false)}
        onLoad={async (parsed) => {
          await onLoad(parsed);
          onLoadSuccess?.();
        }}
        template={template}
        title={loadTitle}
      />
    </>
  );
};

export default LoadJsonButton;
