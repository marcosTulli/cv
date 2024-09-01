import { createTheme } from "@mui/material";
import { themeStore } from "../store";
import { Themes } from "../models/enums";

const useTheme = () => {
    const store = themeStore();

    const dark = {
        palette: {
            primary: {
                main: '#4b0082'
            }
        }
    };


    const light = {
        palette: {
            primary: {
                main: '#b887e0'
            }
        }
    };

    const themeObject = store.selectedTheme === Themes.dark ? dark : light;
    const theme = createTheme(themeObject);

    return {
        theme
    };
};

export default useTheme;