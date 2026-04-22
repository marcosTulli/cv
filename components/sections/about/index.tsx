'use client';
import React from 'react';
import styles from './About.module.scss';
import SectionHeader from '../section-header/SectionHeader';
import { Sections } from '@/models/enums';
import useSectionRef from '../hooks/useSectionRef';
import { languageStore, userStore } from '@/store';
import { Box, Container, Typography } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const About: React.FC = () => {
  const { strings } = languageStore();
  const { user, isLoadingUser } = userStore();
  const { sectionRef } = useSectionRef({ sectionName: Sections.About });

  return (
    <Box component="section" ref={sectionRef} className={styles.section}>
      <SectionHeader
        title={strings.about}
        isLoading={isLoadingUser}
      />
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          component="div"
          className={styles.aboutContent}
          sx={{ color: 'secondary.main' }}
        >
          {isLoadingUser ? (
            <>
              <Skeleton width="100%" height={16} count={4} />
              <Skeleton width="70%" height={16} />
            </>
          ) : (
            user.info?.about
          )}
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
