"use client";
import * as React from "react";
import { Sections } from "@/models/enums";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";
import ConstructionIcon from "@mui/icons-material/Construction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NavItem from "../NavItem";

interface IPageSectionProps {
  section: Sections;
}

const Home = () => (
  <NavItem section={"Home"}>
    <HomeOutlinedIcon />
  </NavItem>
);
const Experience = () => (
  <NavItem section={"Experience"}>
    <WorkOutlineIcon />
  </NavItem>
);

const Education = () => (
  <NavItem section={"Education"}>
    <SchoolIcon />
  </NavItem>
);
const Skills = () => (
  <NavItem section={"Skills"}>
    <ConstructionIcon />
  </NavItem>
);

const PageSection: React.FC<IPageSectionProps> = ({ section }) => {
  if (section === Sections.Header) return <Home />;
  if (section === Sections.WorkExperience) return <Experience />;
  if (section === Sections.Education) return <Education />;
  if (section === Sections.Skills) return <Skills />;
};

export default PageSection;
