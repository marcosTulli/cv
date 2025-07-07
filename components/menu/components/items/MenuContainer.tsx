"use client";
import * as React from "react";
import { Box } from "@mui/material";

const MenuContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
          md: "row",
        },
        alignItems: "end",
        gap: "1rem",
      }}
    >
      {children}
    </Box>
  );
};

export default MenuContainer;
