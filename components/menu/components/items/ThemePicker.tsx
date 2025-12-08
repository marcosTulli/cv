import * as React from 'react';
import { languageStore, themeStore } from '@/store';
import { Box, Button, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Themes } from '@/models/enums';
import { NavigationItem } from './NavigationItem';

const ThemeIcon: React.FC = () => {
  const { selectedTheme } = themeStore();
  return selectedTheme === Themes.light ? <DarkModeIcon /> : <LightModeIcon />;
};

const ThemePicker: React.FC = () => {
  const { toggleTheme } = themeStore();
  const { strings } = languageStore();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <Tooltip title={strings.toggleThemeAction}>
      <Box sx={{ alignItems: 'center', display: 'flex' }}>
        <Button onClick={handleClick} color={'secondary'} sx={{ textTransform: 'none' }}>
          <NavigationItem label={strings.toggleThemeAction as string}>
            <ThemeIcon />
          </NavigationItem>
        </Button>
      </Box>
    </Tooltip>
  );
};

export default ThemePicker;
