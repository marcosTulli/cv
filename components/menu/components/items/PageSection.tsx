"use client";
import * as React from "react";
import { Sections } from "@/models/enums";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";
import ConstructionIcon from "@mui/icons-material/Construction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, Typography } from "@mui/material";

interface IPageSectionProps {
  section: Sections;
}

const SectionItem = ({
  section,
  children,
}: {
  section: string;
  children: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
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
      <Typography>{section}</Typography>
    </Box>
  );
};

const Home = () => (
  <SectionItem section={"Home"}>
    <HomeOutlinedIcon />
  </SectionItem>
);
const Experience = () => (
  <SectionItem section={"Experience"}>
    <WorkOutlineIcon />
  </SectionItem>
);

const Education = () => (
  <SectionItem section={"Education"}>
    <SchoolIcon />
  </SectionItem>
);
const Skills = () => (
  <SectionItem section={"Skills"}>
    <ConstructionIcon />
  </SectionItem>
);

const PageSection: React.FC<IPageSectionProps> = ({ section }) => {
  if (section === Sections.Header) return <Home />;
  if (section === Sections.WorkExperience) return <Experience />;
  if (section === Sections.Education) return <Education />;
  if (section === Sections.Skills) return <Skills />;
};

export default PageSection;
