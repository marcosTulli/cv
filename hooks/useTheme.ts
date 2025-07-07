import { createTheme } from "@mui/material";
import { themeStore } from "../store";
import { Themes } from "../models/enums";

const useTheme = () => {
  const store = themeStore();
  const black = '#1d2226';

  const baseColors = {
    white: { main: "#F7F7F7" },
    black: { main: "#333333" },
    gray: { main: "#808080" },
  };

  const dark = {
    palette: {
      ...baseColors,
      primary: { main: black, weak: "#444444" },
      secondary: { main: "#F7F7F7", strong: "#CCCCCC" },
      defaultBackground: { main: black },
    },
  };

  const light = {
    palette: {
      ...baseColors,
      primary: { main: "#F7F7F7", weak: "#CCCCCC" },
      secondary: { main: "#333333", strong: "#444444" },
      defaultBackground: { main: "#F7F7F7" },
    },
  };

  const themeObject = store.selectedTheme === Themes.dark ? dark : light;
  const theme = createTheme(themeObject);

  return { theme };
};

export default useTheme;
