'use client';
import * as React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { IProject } from '@/models/interfaces';
import styles from './ProjectCard.module.scss';

interface IProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  return (
    <Card
      className={styles.card}
      sx={{
        bgcolor: 'primary.main',
        color: 'secondary.main',
      }}
    >
      <Link href={project.path} target={project.target} className={styles.cardLink}>
        {project.thumbnail && (
          <Box className={styles.thumbnailContainer}>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className={styles.thumbnail}
              sizes="(max-width: 600px) 100vw, 300px"
            />
            <Box className={styles.overlay}>
              <Typography variant="body2" className={styles.overlayText}>
                View Project
              </Typography>
            </Box>
          </Box>
        )}
        <CardContent className={styles.content}>
          <Typography variant="h6" className={styles.title}>
            {project.title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProjectCard;
