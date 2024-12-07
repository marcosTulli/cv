'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { PageSections, Actions } from '../items';
import OpenSideBarButton from '../items/OpenSideBarButton';
import useSideBar from '../../hooks/useSidebar';

const NavBar: React.FC = () => {
    const { isSideBarOpen, toggleSideBar } = useSideBar();

    return (
        <AppBar component="nav" sx={{
            alignItems: { xs: 'left', sm: 'center' },
        }}>
            <Toolbar>
                <OpenSideBarButton
                    onClick={toggleSideBar}
                    display={!isSideBarOpen}
                />
                <Box sx={{
                    display: { xs: 'none', sm: 'flex' },
                    flexWrap: 'nowrap',
                    alignItems: 'center'
                }}>
                    <PageSections />
                    <Actions />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;