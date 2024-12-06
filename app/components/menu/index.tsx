'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Sidebar from './components/sidebar';
import NavBar from './components/navbar';

const Menu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
        </Box>
    );
};

export default Menu;