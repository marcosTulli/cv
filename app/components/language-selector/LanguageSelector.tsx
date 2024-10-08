import React, { useState } from 'react';
import { Language } from '@/app/models/enums';
import { languageStore } from '@/app/store';
import { userStore } from '@/app/store';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Tooltip } from '@mui/material';

const LanguageSelector = () => {
    const { setLang, currentLanguage } = languageStore();
    const { user } = userStore();
    const { strings } = languageStore();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
        <Box sx={{ bgColor: 'primary.main', }}>
            <Tooltip title={strings.changeLanguageAction}>
                <Button
                    id="language-selector-button"
                    aria-controls={open ? 'language-selector-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ color: 'secondary.main' }}
                >
                    {currentLanguage}
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
                    '& .MuiPaper-root': {
                        padding: 0,
                        width: '70px',
                        backgroundColor: 'white',
                        color: 'white',
                    },
                    '& .MuiMenuItem-root': {
                        backgroundColor: 'white',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                        },
                    },
                }}
            >
                {user?.availableLanguages.map((lang, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => handleLanguageChange(lang)}
                    >
                        {lang.toUpperCase()}
                    </MenuItem>
                ))}
            </Menu>
        </Box >
    );
};

export default LanguageSelector;
