import React from 'react';
import { themeStore } from '@/app/store';
import { Box, Switch, Tooltip } from '@mui/material';

const ThemePicker = () => {
    const { toggleTheme } = themeStore();
    // const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    return (
        <Tooltip title={'Change theme'} >
            <Box>
                <Switch
                    onChange={toggleTheme}
                    color={'secondary'}
                />
            </Box>
        </Tooltip>
    );
};

export default ThemePicker;