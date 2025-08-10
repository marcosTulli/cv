'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Node, Dialogs, Header } from './components';
import { useTree } from './hooks';
import { INode } from '@/models/interfaces';

const Projects: React.FC = () => {
  const { rootNode, isLoading } = useTree();
  return (
    <Box
      sx={{
        bgcolor: 'defaultBackground.main',
        paddingTop: '4rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        overflow: 'auto',
      }}
    >
      <Header />
      {isLoading ? (
        <Typography color="secondary">Loading ...</Typography>
      ) : (
        <Node node={rootNode as INode} />
      )}
      <Dialogs />
    </Box>
  );
};

export default Projects;
