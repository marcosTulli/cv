'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Sidebar from './components/sidebar';
import NavBar from './components/navbar';

const Menu = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar setMobileOpen={setMobileOpen} />
            <Sidebar
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />
        </Box>
    );
};

export default Menu;