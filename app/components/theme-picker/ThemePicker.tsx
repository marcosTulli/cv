import React from 'react';
import { Themes } from '@/app/models/enums';
import { themeStore } from '@/app/store';

const ThemePicker = () => {
    const { selectedTheme, toggleTheme } = themeStore();

    return (
        <div>
            <button onClick={toggleTheme}>
                {selectedTheme === Themes.light ? Themes.dark : Themes.light}
            </button>
        </div>
    );
};

export default ThemePicker;