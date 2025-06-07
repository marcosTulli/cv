"use client";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useSideBar from "../../hooks/useSidebar";
import { usePathname } from "next/navigation";

const OpenSideBarButton: React.FC = () => {
  const { isSideBarOpen, toggleSideBar } = useSideBar();
  const pathName = usePathname();
  const isHome = pathName === "/";

  return (
    !isSideBarOpen &&
    isHome && (
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleSideBar}
        sx={{
          ml: "auto",
          display: { sm: "none" },
        }}
      >
        <MenuIcon />
      </IconButton>
    )
  );
};

export default OpenSideBarButton;
