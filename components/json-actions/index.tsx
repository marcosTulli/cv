'use client';
import React from 'react';
import { Box, Button, Tooltip, Typography } from '@mui/material';
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

const NavLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography display={{ xs: 'none', sm: 'none', md: 'flex' }}>{children}</Typography>
);

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
        <Button onClick={handleCopy} sx={{ color: 'secondary.main', textTransform: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ContentCopyIcon />
            <NavLabel>{strings.copyJsonLabel}</NavLabel>
          </Box>
        </Button>
      </Tooltip>
      <Tooltip title={strings.loadJsonLabel}>
        <Button onClick={() => setLoadOpen(true)} sx={{ color: 'secondary.main', textTransform: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <UploadIcon />
            <NavLabel>{strings.loadJsonLabel}</NavLabel>
          </Box>
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
