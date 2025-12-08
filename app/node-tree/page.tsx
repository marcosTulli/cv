'use client';
import React from 'react';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import { Node, Dialogs, Header } from './components';
import { useTree } from './hooks';
import { INode } from '@/models/interfaces';

const Projects: React.FC = () => {
  const { rootNode, isLoading } = useTree();
  return (
    <Box
      sx={{
        bgcolor: 'defaultBackground.main',
        paddingTop: { xs: '2rem', sm: '3rem', md: '4rem' },
        paddingX: { xs: 2, sm: 3, md: 4 },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'auto',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 600, md: 800 },
          minHeight: {
            xs: 'calc(100vh - 4rem - 32px)',
            sm: 'calc(100vh - 6rem - 32px)',
            md: 'calc(100vh - 8rem - 32px)',
          },
          borderRadius: { xs: 3, sm: 4 },
          overflow: 'hidden',
          backgroundColor: 'defaultBackground.paper',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          {isLoading ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 4,
                gap: 2,
              }}
            >
              <CircularProgress size={24} sx={{ color: '#667eea' }} />
              <Typography color="secondary" sx={{ opacity: 0.7 }}>
                Loading...
              </Typography>
            </Box>
          ) : (
            <Node node={rootNode as INode} />
          )}
        </Box>
      </Paper>
      <Dialogs />
    </Box>
  );
};

export default Projects;
