'use client';
import * as React from 'react';
import { Box, FormControlLabel, Switch, Tooltip } from '@mui/material';
import { languageStore } from '@/store';
import { useAuth, useUi } from '@/hooks';

const EditModeSwitch: React.FC = () => {
  const { strings } = languageStore();
  const { isEditMode, toggleEditMode, setEditMode } = useUi();
  const { isAdmin } = useAuth();

  React.useEffect(() => {
    if (!isAdmin && isEditMode) {
      setEditMode(false);
    }
  }, [isAdmin, isEditMode, setEditMode]);

  if (!isAdmin) return null;

  const label = strings.editswitchlabel || 'Edit mode';

  return (
    <Tooltip title={label}>
      <Box sx={{ alignItems: 'center', display: 'flex' }}>
        <FormControlLabel
          control={
            <Switch checked={isEditMode} onChange={toggleEditMode} color="secondary" size="small" />
          }
          label={label}
          sx={{
            m: 0,
            color: 'secondary.main',
            '& .MuiFormControlLabel-label': { display: 'flex', alignItems: 'center' },
          }}
        />
      </Box>
    </Tooltip>
  );
};

export default EditModeSwitch;
