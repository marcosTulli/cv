import * as React from 'react';
import { Divider } from '@mui/material';
import { Download, ThemePicker, LanguageSelector, EditModeSwitch } from '../items';
import { useAuth } from '@/hooks';

const Actions: React.FC = () => {
  const { isAdmin } = useAuth();

  return (
    <>
      <LanguageSelector />
      <ThemePicker />
      <Download />
      {isAdmin && (
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 1, borderColor: 'rgba(255,255,255,0.2)' }}
        />
      )}
      <EditModeSwitch />
    </>
  );
};

export default Actions;
