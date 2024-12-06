import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Download, ThemePicker, LanguageSelector } from '../items';
import PageSections from '../navbar/PageSections';

interface Props {
    window?: () => Window;
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const drawerWidth = 80;

const SideBar: React.FC<Props> = ({ window, isSidebarOpen, setIsSidebarOpen }) => {
    const handleDrawerToggle = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Drawer
            container={container}
            open={isSidebarOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
                display: { xs: 'flex', sm: 'none' },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth,
                    overflow: 'hidden',
                },
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'primary.main',
                gap: '2rem',
                height: '100%',
            }}>
                <PageSections onClick={handleDrawerToggle} />
                <LanguageSelector />
                <ThemePicker />
                <Download />
            </Box>
        </Drawer>
    );
};

export default SideBar;
