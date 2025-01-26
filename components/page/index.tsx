"use client";
import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";

const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: "defaultBackground.main",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {children}
    </Box>
  );
};

export default Page;
