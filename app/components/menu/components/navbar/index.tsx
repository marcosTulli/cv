'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { usePageSections } from '../../hooks';
import { Tooltip } from '@mui/material';
import { Download, PageSection, ThemePicker, LanguageSelector } from '../items';
import OpenSideBarButton from '../items/OpenSideBarButton';

interface INavBarProps {
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSidebarOpen: boolean;
}

const NavBar: React.FC<INavBarProps> = ({ setIsSidebarOpen, isSidebarOpen }) => {
    const handleDrawerToggle = () => { setIsSidebarOpen((prevState) => !prevState); };
    const { pageSections } = usePageSections();

    return (
        <AppBar component="nav" sx={{ alignItems: 'center' }}>
            <Toolbar>
                <OpenSideBarButton
                    onClick={handleDrawerToggle}
                    display={!isSidebarOpen}
                />
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexWrap: 'nowrap', alignItems: 'center' }}>
                    {
                        pageSections.map(section => (
                            <Tooltip key={section.title} title={section.title} >
                                <Button
                                    sx={{ color: 'secondary.main' }}
                                    onClick={section.onClick}
                                >
                                    <PageSection section={section.name} />
                                </Button>
                            </Tooltip>
                        ))
                    }
                    <LanguageSelector />
                    <ThemePicker />
                    <Download />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;