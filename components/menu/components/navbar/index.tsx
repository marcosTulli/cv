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
import OpenAdminDialogButton from "../admin-dialog/button";
import { useUser } from "@/hooks/queries";

const NavBar: React.FC = () => {
  const pathName = usePathname();
  const isHome = pathName === "/";

  return (
    <AppBar
      component="nav"
      sx={{
        alignItems: { xs: "end", sm: `${isHome ? "center" : "left"}` },
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          position: { xs: "static", sm: "relative" },
        }}
      >

        <OpenSideBarButton />

        {isHome ? (
          <>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexWrap: "nowrap",
                alignItems: "center",
                mx: "auto",
              }}
            >
              <PageSections />
              <Actions />
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                right: 0,
              }}
            >
              <OpenAdminDialogButton />
            </Box>
          </>
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
