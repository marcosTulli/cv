import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import LanguageIcon from '@mui/icons-material/Public';
import DownloadIcon from '@mui/icons-material/Download';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { languageStore, themeStore } from '@/store';
import { Language, Themes } from '@/models/enums';
import { useDownload, useTheme } from '@/hooks';
import { useActionsMenu } from '../../hooks/useActionsMenu';

export function ActionsMenu() {
  const { isActionsMenuOpen, toggleActionsMenu } = useActionsMenu();
  const { toggleTheme, selectedTheme } = themeStore();
  const { currentLanguage, setLang, strings } = languageStore();
  const { handleDownload: download } = useDownload();
  const { theme } = useTheme();

  const handleClose = () => {
    if (isActionsMenuOpen) toggleActionsMenu();
  };

  const handleDownloadPDF = () => {
    download();
    handleClose();
  };

  const handleToggleTheme = () => {
    toggleTheme();
    handleClose();
  };

  const handleToggleLanguage = () => {
    setLang(currentLanguage === Language.EN ? Language.ES : Language.EN);
    handleClose();
  };

  const isDark = selectedTheme === Themes.dark;

  const actions = [
    {
      icon: <LanguageIcon />,
      name: currentLanguage === Language.EN ? 'Español' : 'English',
      onClick: handleToggleLanguage,
    },
    {
      icon: isDark ? <LightModeIcon /> : <DarkModeIcon />,
      name: strings.toggleThemeAction || 'Toggle Theme',
      onClick: handleToggleTheme,
    },
    {
      icon: <DownloadIcon />,
      name: strings.downloadAction || 'Download PDF',
      onClick: handleDownloadPDF,
    },
  ];

  if (!isActionsMenuOpen) return null;

  return (
    <>
      <Box
        onClick={handleClose}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1200,
          display: { xs: 'block', sm: 'none' },
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          bottom: 80,
          right: 16,
          display: 'flex',
          flexDirection: 'column-reverse',
          gap: 1.5,
          zIndex: 1250,
          '@media (min-width: 600px)': {
            display: 'none',
          },
        }}
      >
        {actions.map((action, index) => (
          <Box
            key={action.name}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 2,
              animation: `slideIn 0.2s ease-out ${index * 0.05}s both`,
              '@keyframes slideIn': {
                from: {
                  opacity: 0,
                  transform: 'translateX(20px)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateX(0)',
                },
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                padding: '8px 16px',
                borderRadius: 1,
                boxShadow: 2,
                whiteSpace: 'nowrap',
                fontSize: '0.875rem',
                border: `1px solid ${theme.palette.primary.dark}`,
              }}
            >
              {action.name}
            </Box>
            <Fab size="small" onClick={action.onClick}>
              {action.icon}
            </Fab>
          </Box>
        ))}
      </Box>
    </>
  );
}
