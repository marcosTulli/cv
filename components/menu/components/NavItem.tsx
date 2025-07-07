"use client";
import * as React from "react";
import { Box, Typography } from "@mui/material";

const NavItem = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5rem",
      }}
    >
      <Box
        sx={{
          margin: "0",
          padding: "0",
          display: { xs: "none", md: "block", lg: "block" },
        }}
      >
        {children}
      </Box>
      <Typography>{label}</Typography>
    </Box>
  );
};

export default NavItem;
