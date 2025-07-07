import * as React from "react";
import { languageStore, themeStore } from "@/store";
import { Button, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Themes } from "@/models/enums";
import useSideBar from "../../hooks/useSidebar";
import NavItem from "../NavItem";

const ThemeIcon: React.FC = () => {
  const { selectedTheme } = themeStore();
  return selectedTheme === Themes.light ? <DarkModeIcon /> : <LightModeIcon />;
};

const ThemePicker: React.FC = () => {
  const { toggleTheme } = themeStore();
  const { strings } = languageStore();
  const { isSideBarOpen, toggleSideBar } = useSideBar();

  const handleClick = () => {
    toggleTheme();
    isSideBarOpen && toggleSideBar();
  };

  return (
    <Tooltip title={strings.toggleThemeAction}>
      <Button
        onClick={handleClick}
        color={"secondary"}
        sx={{ display: "flex", gap: "0.5rem" }}
      >
        <NavItem label={"Theme"}>
          <ThemeIcon />
        </NavItem>
      </Button>
    </Tooltip>
  );
};

export default ThemePicker;
