'use client';
import React from 'react';
import styles from './SectionHeader.module.scss';
import { Box, Container } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ISectionHeaderProps {
  title: string | undefined;
  description?: string | undefined;
  isLoading: boolean;
  pageHeader?: boolean;
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({
  title,
  description,
  isLoading,
  pageHeader,
}) => {
  return (
    <Container className={styles.sectionHeader}>
      <Box sx={{ color: 'secondary.main' }}>
        <div
          className={`${pageHeader ? styles.pageTitle : styles.sectionTitle}`}
        >
          {isLoading ? (
            <Skeleton
              height={pageHeader ? 64 : 32}
              width={pageHeader ? "45%" : "40%"}
              style={{ fontSize: pageHeader ? '4rem' : '2rem' }}
            />
          ) : (
            title
          )}
        </div>

        {(description || isLoading) && (
          <p
            className={`${
              pageHeader ? styles.headerDescription : styles.sectionDescription
            }`}
          >
            {isLoading ? (
              <Skeleton 
                height={pageHeader ? 32 : 18} 
                width={pageHeader ? "35%" : "60%"}
                style={{ fontSize: pageHeader ? '2rem' : '1.125rem' }}
              />
            ) : (
              description
            )}
          </p>
        )}
      </Box>
    </Container>
  );
};

export default SectionHeader;
