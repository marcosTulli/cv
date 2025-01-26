'use client';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useSideBar from '../../hooks/useSidebar';


const OpenSideBarButton: React.FC = () => {
    const { isSideBarOpen, toggleSideBar } = useSideBar();

    return (
        !isSideBarOpen && <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleSideBar}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            <MenuIcon />
        </IconButton>
    );
};


export default OpenSideBarButton;