'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Download, ThemePicker, LanguageSelector } from '../items';
import OpenSideBarButton from '../items/OpenSideBarButton';
import PageSections from './PageSections';

interface INavBarProps {
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSidebarOpen: boolean;
}

const NavBar: React.FC<INavBarProps> = ({ setIsSidebarOpen, isSidebarOpen }) => {
    const handleDrawerToggle = () => { setIsSidebarOpen((prevState) => !prevState); };

    return (
        <AppBar component="nav" sx={{ alignItems: 'center' }}>
            <Toolbar>
                <OpenSideBarButton
                    onClick={handleDrawerToggle}
                    display={!isSidebarOpen}
                />
                <Box sx={{
                    display: { xs: 'none', sm: 'flex' },
                    flexWrap: 'nowrap',
                    alignItems: 'center'
                }}>
                    <PageSections />
                    <LanguageSelector />
                    <ThemePicker />
                    <Download />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;