"use client";
import * as React from "react";
import { Education, WorkExperience, Skills } from "@components/sections";
import Info from "@components/info";
import { Box } from "@mui/material";
import { useDownload } from "@/app/hooks";
import Header from "@/app/components/header";
import { PrintableTemplate } from "./components/pdf-version/PrintableTemplate";

const Home = () => {
  const { downloadRef } = useDownload();
  return (
    <Box
      sx={{
        bgcolor: "defaultBackground.main",
        minWidth: "100%",
      }}
    >
      <Header />
      <Info />
      <WorkExperience />
      <Education />
      <Skills />
      <PrintableTemplate ref={downloadRef} />
    </Box>
  );
};

export default Home;
