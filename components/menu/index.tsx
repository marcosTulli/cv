'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Sidebar from './components/sidebar';
import NavBar from './components/navbar';

const Menu = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Sidebar />
    </Box>
  );
};

export default Menu;
