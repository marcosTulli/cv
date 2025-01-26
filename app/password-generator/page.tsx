"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Page from "@/components/page";

const Projects: React.FC = () => {
  return (
    <Page>
      <Typography sx={{ color: "secondary.main", fontSize: "3rem" }}>
        Password Generator
      </Typography>
    </Page>
  );
};

export default Projects;
