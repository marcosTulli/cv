import React from 'react';
import { Grid, Container } from '@mui/material';
import styles from './SignlePageTemplate.module.scss';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

const SinglePageTemplate: React.FC = () => {
  return (
    <Container maxWidth="xl" className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={4} className={styles.leftContainer}>
          <Header />
          <Education />
          <Skills />
        </Grid>
        <Grid item xs={8} className={styles.rightContainer}>
          <WorkExperience />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SinglePageTemplate;
