import { createTheme } from "@mui/material";
import { themeStore } from "../store";
import { Themes } from "../models/enums";

const useTheme = () => {


    const store = themeStore();
    const baseColors = {
        white: { main: '#f2f2f2' },
        black: { main: '#0f0f0f' },
        gray: { main: '#595959' },
    };

    const dark = {
        palette: {
            ...baseColors,
            primary: { main: '#1A4958' },
            secondary: { main: '#39B990', strong: '#0F9D6D' },
            defaultBackground: { main: '#0f0f0f' }
        }

    };

    const light = {
        palette: {
            ...baseColors,
            primary: { main: '#B0C0A9' },
            secondary: { main: '#2A5056', strong: '#1B3E44' },
            defaultBackground: { main: '#f2f2f2' }
        }

    };



    const themeObject = store.selectedTheme === Themes.dark ? dark : light;
    const theme = createTheme(themeObject);

    return {
        theme
    };
};

export default useTheme;
