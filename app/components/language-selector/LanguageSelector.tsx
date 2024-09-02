import React, { useState } from 'react';
import { Language } from '@/app/models/enums';
import { languageStore } from '@/app/store';
import { userStore } from '@/app/store';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

const LanguageSelector = () => {
    const { setLang, currentLanguage } = languageStore();
    const { user } = userStore();

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
                        width: '100px',
                        backgroundColor: 'secondary.main', // Target only the menu's Paper element
                        color: 'white',               // Set text color for the items
                    },
                    '& .MuiMenuItem-root': {
                        backgroundColor: 'secondary.main',  // Set MenuItem background color
                        '&:hover': {
                            backgroundColor: 'primary.main',   // Set hover background color
                        },
                    },
                }}
            >
                {user?.availableLanguages.map((lang, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => handleLanguageChange(lang)}
                    >
                        {lang}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default LanguageSelector;
