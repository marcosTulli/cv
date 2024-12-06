import * as React from 'react';
import { Language } from '@/app/models/enums';
import { languageStore } from '@/app/store';
import { userStore } from '@/app/store';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Tooltip } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

const LanguageSelector: React.FC = () => {
    const { setLang } = languageStore();
    const { user } = userStore();
    const { strings } = languageStore();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (language: Language) => {
        setLang(language);
        handleClose();
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
                    sx={{ color: 'secondary.main' }}
                >
                    <TranslateIcon />
                </Button>
            </Tooltip>
            <Menu
                id="language-selector-menu"
                aria-labelledby="language-selector-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{
                    marginTop: '1rem',
                    '& .MuiPaper-root': {
                        backgroundColor: 'secondary.main',
                        color: 'primary.main',
                    },
                    '& .MuiMenuItem-root': {
                        backgroundColor: 'secondary.main',
                        color: 'primary.main',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'secondary.main',
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
