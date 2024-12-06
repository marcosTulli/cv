import * as React from 'react';
import { languageStore, themeStore } from '@/app/store';
import { Box, Button, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Themes } from '@/app/models/enums';

const ThemeIcon: React.FC = () => {
    const { selectedTheme } = themeStore();
    return selectedTheme === Themes.light ? <DarkModeIcon /> : <LightModeIcon />;
};


interface IThemePickerProps {
    onClick?: () => void;
}
const ThemePicker: React.FC<IThemePickerProps> = ({ onClick }) => {
    const { toggleTheme } = themeStore();
    const { strings } = languageStore();

    const handleClick = () => {
        onClick && onClick();
        toggleTheme();
    };

    return (
        <Tooltip title={strings.toggleThemeAction} >
            <Box sx={{ alignItems: 'center', display: 'flex' }} >
                <Button
                    onClick={handleClick}
                    color={'secondary'}
                >
                    <ThemeIcon />
                </Button>
            </Box>
        </Tooltip>
    );
};

export default ThemePicker;