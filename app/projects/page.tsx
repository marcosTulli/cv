"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

const Projects: React.FC = () => {
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
      <Typography sx={{ color: "secondary.main", fontSize: "3rem" }}>
        Projects
      </Typography>
    </Box>
  );
};

export default Projects;
