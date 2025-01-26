"use client";
import * as React from "react";
import styles from "./Projects.module.scss";
import { Container } from "@mui/material";
import Carousel from "./Carousel";

const ProjectsBody: React.FC = () => {
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
