import { createTheme } from "@mui/material";
import { themeStore } from "../store";
import { Themes } from "../models/enums";

const useTheme = () => {
  const store = themeStore();

  const baseColors = {
    white: { main: "#f2f2f2" },
    black: { main: "#1A1A1A" },
    gray: { main: "#595959" },
  };

  const dark = {
    palette: {
      ...baseColors,
      primary: { main: "#1A4958" },
      secondary: { main: "#d1ffff", strong: "#0F9D6D" },
      defaultBackground: { main: "#1A1A1A" },
    },
  };

  const light = {
    palette: {
      ...baseColors,
      primary: { main: "#F5F5DC" },
      secondary: { main: "#1A1A1A", strong: "#1B3E44" },
      defaultBackground: { main: "#C9D2B5" },
    },
  };

  const themeObject = store.selectedTheme === Themes.dark ? dark : light;
  const theme = createTheme(themeObject);

  return { theme };
};

export default useTheme;
