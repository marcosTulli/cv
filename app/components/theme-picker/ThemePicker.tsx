import React from 'react';
import { languageStore, themeStore } from '@/app/store';
import { Box, Switch, Tooltip } from '@mui/material';

const ThemePicker = () => {
    const { toggleTheme } = themeStore();
    const { strings } = languageStore();
    return (
        <Tooltip title={strings.toggleThemeAction} >
            <Box
                sx={{ padding: '0' }}
            >
                <Switch
                    onChange={toggleTheme}
                    color={'secondary'}
                />
            </Box>
        </Tooltip>
    );
};

export default ThemePicker;