"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { PageSections, Actions } from "../items";
import OpenSideBarButton from "../items/OpenSideBarButton";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Tooltip } from "@mui/material";

const NavBar: React.FC = () => {
  const pathName = usePathname();
  const isHome = pathName === "/";
  return (
    <AppBar
      component="nav"
      sx={{
        alignItems: { xs: "left", sm: `${isHome ? "center" : "left"}` },
      }}
    >
      <Toolbar>
        <OpenSideBarButton />
        {isHome ? (
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexWrap: "nowrap",
              alignItems: "center",
            }}
          >
            <PageSections />
            <Actions />
          </Box>
        ) : (
          <Tooltip title="Home">
            <IconButton color="inherit" edge="start">
              <Link href="/">
                <ArrowBackIcon />
              </Link>
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
