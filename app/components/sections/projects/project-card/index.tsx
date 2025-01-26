import React from "react";
import styles from "./ProjectCard.module.scss";
import { Box } from "@mui/material";

type ProjectCard = {};

const ProjectCard: React.FC<ProjectCard> = () => {
  return (
    <Box className={styles.job} sx={{ color: "secondary.main" }}>
      <Box
        component={"div"}
        sx={{
          display: " flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        This is a project card
      </Box>
    </Box>
  );
};

export default ProjectCard;
