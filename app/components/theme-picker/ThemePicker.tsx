import React from 'react';
import { themeStore } from '@/app/store';

const ThemePicker = () => {
    const { theme, toggleTheme } = themeStore();

    return (
        <div>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Dark' : 'Light'}
            </button>
        </div>
    );
};

export default ThemePicker;