"use client";
import * as React from "react";
import { Sections } from "@/models/enums";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";
import ConstructionIcon from "@mui/icons-material/Construction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CodeIcon from "@mui/icons-material/Code";

interface IPageSectionProps {
  section: Sections;
}

const PageSection: React.FC<IPageSectionProps> = ({ section }) => {
  if (section === Sections.Header) return <HomeOutlinedIcon />;
  if (section === Sections.WorkExperience) return <WorkOutlineIcon />;
  if (section === Sections.Education) return <SchoolIcon />;
  if (section === Sections.Skills) return <ConstructionIcon />;
  if (section === Sections.Projects) return <CodeIcon />;
};

export default PageSection;
