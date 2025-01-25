"use client";
import * as React from "react";
import { Education, WorkExperience, Skills } from "../sections";
import Info from "@components/info";
import { Box } from "@mui/material";
import { PrintableTemplate } from "../pdf-version/PrintableTemplate";
import { useDownload } from "@/app/hooks";

const Home = () => {
  const { downloadRef } = useDownload();
  return (
    <Box
      sx={{
        bgcolor: "defaultBackground.main",
        minWidth: "100%",
      }}
    >
      <Info />
      <WorkExperience />
      <Education />
      <Skills />
      <PrintableTemplate ref={downloadRef} />
    </Box>
  );
};

export default Home;
