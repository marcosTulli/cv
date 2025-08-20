'use client';
import React from 'react';
import styles from './JobCard.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Box } from '@mui/material';

import { useMediaQuery } from '@mui/material';

const JobCardSkeleton: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');
  return (
    <Box className={styles.job} sx={{ color: 'secondary.main' }}>
      <Box component={'h3'} className={styles.jobTitle}>
        <Skeleton height={24} width={200} />
      </Box>
      <p className={styles.jobDetails}>
        <Skeleton height={18} width={150} />
      </p>
      <ul className={styles.jobDescription}>
        {Array.from({ length: 14 }).map((_, i) => {
          return (
            <Box sx={{ padding: 0 }} key={i}>
              <Skeleton height={8} width={isMobile ? 300 : 400} />
            </Box>
          );
        })}
      </ul>
    </Box>
  );
};

export default JobCardSkeleton;
