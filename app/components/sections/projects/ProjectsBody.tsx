"use client";
import * as React from "react";
import styles from "./Projects.module.scss";
import { Container, Grid } from "@mui/material";
import ProjectCard from "./project-card";
import Carousel from "./Carousel";

interface IProjectsBody {}

const ProjectsBody: React.FC<IProjectsBody> = () => {
  return (
    <Container className={styles.section}>
      {/* <Grid container maxWidth="lg" spacing={1.5}>
        {Array.from({ length: 2 }).map(() => (
          <ProjectCard key={Math.random()} />
        ))}
      </Grid> */}
      <Carousel />
    </Container>
  );
};

export default ProjectsBody;
