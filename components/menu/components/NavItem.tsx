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
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          margin: "0",
          padding: "0",
          display: { xs: "none", md: "flex", lg: "flex" },
        }}
      >
        {children}
      </Box>
      <Typography fontSize={15} sx={{ padding: "0", margin: "0" }}>
        {label}
      </Typography>
    </Box>
  );
};

export default NavItem;
