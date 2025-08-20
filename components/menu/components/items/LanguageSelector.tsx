import * as React from 'react';
import { Language } from '@/models/enums';
import { languageStore, userStore, themeStore } from '@/store';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Tooltip } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public'; // 🌐 globe icon
import useSideBar from '../../hooks/useSidebar';

const LanguageSelector: React.FC = () => {
  const { setLang, strings } = languageStore();
  const { user } = userStore();
  const { isSideBarOpen, toggleSideBar } = useSideBar();
  const { selectedTheme } = themeStore();

  const isDark = selectedTheme === 'dark';
  const menuBg = isDark ? '#1d2226' : '#F7F7F7';
  const menuText = isDark ? '#F7F7F7' : '#333333';
  const hoverBg = isDark ? '#444444' : '#CCCCCC';

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLanguageChange = (language: Language) => {
    setLang(language);
    handleClose();
    isSideBarOpen && toggleSideBar();
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Tooltip title={strings.changeLanguageAction}>
        <Button
          id="language-selector-button"
          aria-controls={open ? 'language-selector-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ color: menuText }}
        >
          <PublicIcon />
        </Button>
      </Tooltip>

      <Menu
        id="language-selector-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        sx={{
          marginTop: '0.5rem',
          '& .MuiPaper-root': {
            backgroundColor: menuBg,
            color: menuText,
          },
          '& .MuiMenuItem-root': {
            '&:hover': {
              backgroundColor: hoverBg,
            },
          },
        }}
      >
        {user?.availableLanguages.map((lang, index) => (
          <MenuItem
            key={index}
            onClick={() => handleLanguageChange(lang)}
            sx={{ width: '100px' }}
          >
            {lang.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
