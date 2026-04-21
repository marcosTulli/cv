'use client';
import React from 'react';
import { Button, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import UploadIcon from '@mui/icons-material/Upload';
import { languageStore } from '@/store';
import { uiStore } from '@/store';
import LoadJsonModal from '@/components/load-json-modal';

interface JsonActionsProps {
  data: unknown;
  onLoad: (data: unknown) => Promise<void>;
  onLoadSuccess?: () => void;
  transform?: (data: unknown) => unknown;
  template: string;
  loadTitle?: string;
}

const JsonActions: React.FC<JsonActionsProps> = ({
  data,
  onLoad,
  onLoadSuccess,
  transform,
  template,
  loadTitle,
}) => {
  const { strings } = languageStore();
  const showSnackbar = uiStore((state) => state.showSnackbar);
  const [loadOpen, setLoadOpen] = React.useState(false);

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
    <>
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
      <Tooltip title={strings.loadJsonLabel}>
        <Button
          size="small"
          startIcon={<UploadIcon sx={{ fontSize: 14 }} />}
          onClick={() => setLoadOpen(true)}
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
        open={loadOpen}
        onClose={() => setLoadOpen(false)}
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

export default JsonActions;
