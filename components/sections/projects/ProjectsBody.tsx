'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import ProjectCard from './project-card';
import { IProject } from '@/models/interfaces';
import styles from './Projects.module.scss';

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    className={styles.arrow}
    sx={{
      position: 'absolute',
      right: { xs: -5, sm: -20, md: -40 },
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      color: 'secondary.main',
      bgcolor: 'rgba(0,0,0,0.3)',
      '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
    }}
  >
    <ChevronRight fontSize="large" />
  </IconButton>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    className={styles.arrow}
    sx={{
      position: 'absolute',
      left: { xs: -5, sm: -20, md: -40 },
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      color: 'secondary.main',
      bgcolor: 'rgba(0,0,0,0.3)',
      '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
    }}
  >
    <ChevronLeft fontSize="large" />
  </IconButton>
);

enum Paths {
  PasswordGenerator = 'password-generator',
  NodeTree = 'node-tree',
  TicTacToe = 'tictactoe',
  BandsDb = 'https://bands-db.vercel.app/bands',
  CVAPI = 'https://cv-service-cf36.onrender.com/api',
  PatientManager = 'https://mt-patientmanagement.vercel.app/',
}

enum Thumbnails {
  PasswordGenerator = '/projects/password-generator.png',
  NodeTree = '/projects/node-tree.png',
  TicTacToe = '/projects/tictactoe.png',
  BandsDb = '/projects/bands-db.png',
  CVAPI = '/projects/cv-api.png',
  PatientManager = '/projects/patient-manager.png',
}

const ProjectsBody = () => {
  const settings = {
    infinite: true,
    className: 'center',
    swipeToSlide: true,
    draggable: true,
    arrows: true,
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchThreshold: 10,
    cssEase: 'ease-out',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects: IProject[] = [
    {
      id: 1,
      title: 'Password Generator',
      content: 'Password generator',
      path: Paths.PasswordGenerator,
      target: '_self',
      thumbnail: Thumbnails.PasswordGenerator,
    },
    {
      id: 2,
      title: 'Node Tree',
      content: 'Node tree',
      path: Paths.NodeTree,
      target: '_self',
      thumbnail: Thumbnails.NodeTree,
    },
    {
      id: 3,
      title: 'Bands DB',
      content: 'Bands DB',
      path: Paths.BandsDb,
      target: '_blank',
      thumbnail: Thumbnails.BandsDb,
    },
    {
      id: 4,
      title: 'Tic Tac Toe',
      content: 'Tic Tac Toe',
      path: Paths.TicTacToe,
      target: '_self',
      thumbnail: Thumbnails.TicTacToe,
    },
    {
      id: 5,
      title: 'CV API',
      content: 'CV API',
      path: Paths.CVAPI,
      target: '_blank',
      thumbnail: Thumbnails.CVAPI,
    },
    {
      id: 6,
      title: 'Patient Manager',
      content: 'Patient Manager',
      path: Paths.PatientManager,
      target: '_blank',
      thumbnail: Thumbnails.PatientManager,
    },
  ];

  return (
    <Box
      sx={{ maxWidth: '90%', margin: 'auto', height: '100%', pb: 4 }}
      className="slider-container"
    >
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Slider>
    </Box>
  );
};

export default ProjectsBody;
