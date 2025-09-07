'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { PageSections, Actions } from '../items';
import OpenSideBarButton from '../items/OpenSideBarButton';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, Tooltip } from '@mui/material';

const NavBar: React.FC = () => {
  const pathName = usePathname();
  const isHome = pathName === '/';

  return (
    <AppBar
      component="nav"
      sx={{
        alignItems: { xs: 'end', sm: `${isHome ? 'center' : 'left'}` },
        position: 'fixed',
        top: { xs: 'auto', sm: 0 },
        bottom: { xs: 0, sm: 'auto' },
        left: 0,
        right: 0,
        '@media (min-width: 577px)': {
          top: 0,
          bottom: 'auto',
        },
        '@media (max-width: 576px)': {
          top: 'auto',
          bottom: 0,
        },
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
        }}
      >
        <OpenSideBarButton />

        {isHome ? (
          <>
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex', gap:'1rem' },
                flexWrap: 'nowrap',
                alignItems: 'center',
                mx: 'auto',
              }}
            >
              <PageSections />
              <Actions />
            </Box>
          </>
        ) : (
          <Tooltip title="Home">
            <IconButton color="inherit" edge="start">
              <Link href="/">
                <ArrowBackIcon />
              </Link>
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
