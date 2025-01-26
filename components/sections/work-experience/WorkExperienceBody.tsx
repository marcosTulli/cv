"use client";
import * as React from "react";
import JobCard from "./job-card/JobCard";
import styles from "./WorkExperience.module.scss";
import { languageStore } from "@/store";
import { IExperience } from "@/models/interfaces";
import { Container, Grid } from "@mui/material";
import JobCardSkeleton from "./job-card/SkeletonJobCard";

interface IWorkExperienceBody {
  data?: IExperience[];
  isLoading: boolean;
}

const WorkExperienceBody: React.FC<IWorkExperienceBody> = ({
  data,
  isLoading,
}) => {
  const { currentLanguage } = languageStore();

  return (
    <Container className={styles.section}>
      <Grid container maxWidth="lg" spacing={1.5}>
        {isLoading
          ? Array.from({ length: 4 })?.map((_, i) => (
              <Grid item xs={12} sm={12} md={6} key={i}>
                <JobCardSkeleton key={i} />
              </Grid>
            ))
          : data?.map((experience) => (
              <Grid item xs={12} sm={12} md={6} key={experience._id}>
                <JobCard experience={experience} language={currentLanguage} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
};

export default WorkExperienceBody;
