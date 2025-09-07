'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import NavBar from './components/navbar';
import { ActionsMenu } from './components/actions-menu';

const Menu = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <NavBar />
      </Box>
      <ActionsMenu />
    </>
  );
};

export default Menu;
