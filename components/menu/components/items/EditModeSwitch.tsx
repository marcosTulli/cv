'use client';
import * as React from 'react';
import { Box, Button, FormControlLabel, Switch, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { languageStore } from '@/store';
import { useAuth, useLogout, useUi } from '@/hooks';

const EditModeSwitch: React.FC = () => {
  const { strings } = languageStore();
  const { isEditMode, toggleEditMode, setEditMode } = useUi();
  const { isAdmin } = useAuth();
  const { logout } = useLogout();

  React.useEffect(() => {
    if (!isAdmin && isEditMode) {
      setEditMode(false);
    }
  }, [isAdmin, isEditMode, setEditMode]);

  if (!isAdmin) return null;

  const editLabel = strings.editswitchlabel;
  const logoutLabel = strings.logoutButtonLabel;

  return (
    <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
      <Tooltip title={editLabel}>
        <FormControlLabel
          control={
            <Switch checked={isEditMode} onChange={toggleEditMode} color="secondary" size="small" />
          }
          label={editLabel}
          sx={{
            m: 0,
            color: 'secondary.main',
            '& .MuiFormControlLabel-label': { display: 'flex', alignItems: 'center' },
          }}
        />
      </Tooltip>
      <Tooltip title={logoutLabel}>
        <Button onClick={logout} color="secondary" sx={{ textTransform: 'none', minWidth: 'auto' }}>
          <LogoutIcon fontSize="small" />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default EditModeSwitch;
