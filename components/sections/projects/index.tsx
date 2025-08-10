'use client';
import React from 'react';
import styles from './Projects.module.scss';
import ProjectsBody from './ProjectsBody';
import SectionHeader from '../section-header/SectionHeader';
import { Sections } from '@/models/enums';
import useSectionRef from '../hooks/useSectionRef';
import { languageStore } from '@/store';
import { Box } from '@mui/material';

const Projects: React.FC = () => {
  const { strings } = languageStore();

  const { sectionRef } = useSectionRef({
    sectionName: Sections.Projects,
  });

  return (
    <Box
      sx={{ bgcolor: 'primary.main' }}
      component="section"
      ref={sectionRef}
      className={styles.section}
    >
      <SectionHeader title={strings.Projects} isLoading={false} />
      <ProjectsBody />
    </Box>
  );
};

export default Projects;
