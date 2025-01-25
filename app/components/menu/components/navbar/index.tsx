"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { PageSections, Actions } from "../items";
import OpenSideBarButton from "../items/OpenSideBarButton";
import Link from "next/link";
import { Typography } from "@mui/material";

const NavBar: React.FC = () => {
  return (
    <AppBar
      component="nav"
      sx={{
        alignItems: { xs: "left", sm: "center" },
      }}
    >
      <Toolbar>
        <OpenSideBarButton />
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexWrap: "nowrap",
            alignItems: "center",
          }}
        >
          <PageSections />
          <Actions />
          <Link href="/projects">
            <Typography sx={{ color: "secondary.main" }}>Projects</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
