'use client';
import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { IProject } from '@/models/interfaces';

interface IProjectCardProps {
  project: IProject;
}
const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  return (
    <Card
      key={project.id}
      sx={{
        bgcolor: 'primary.main',
        color: 'secondary.main',
        borderRadius: '1rem',
        boxShadow: '4px 4px 5px 4px rgba(0, 0, 0, 0.5)',
        margin: '1rem',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '300px',
        cursor: 'pointer',
        alignItems: 'center',
        ':hover': {
          bgcolor: 'primary.weak',
        },
      }}
      className="carousel-card"
    >
      <Link href={project.path} target={project.target}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {project.title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProjectCard;
