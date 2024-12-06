import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { languageStore } from '@/app/store';
import { Tooltip } from '@mui/material';
import { usePageSections } from '../../hooks';
import { Download, PageSection, ThemePicker, LanguageSelector } from '../items';

interface Props {
    window?: () => Window;
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const drawerWidth = 80;

const SideBar: React.FC<Props> = ({ window, isSidebarOpen, setIsSidebarOpen }) => {
    const { strings } = languageStore();
    const handleDrawerToggle = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerClick = (sectionName: string) => {
        if (sectionName !== 'Language') {
            handleDrawerToggle();
        }
    };

    const { pageSections } = usePageSections();

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
                height: '100%',
            }}>
                <List sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                    justifyContent: 'center',
                    padding: 0,  // Removes extra padding around the list
                }}>
                    {pageSections.map((section) => (
                        <ListItem key={section.name} disablePadding sx={{ width: '100%' }}>
                            <ListItemButton
                                sx={{
                                    textAlign: 'center',
                                    color: 'secondary.main',
                                    width: '100%',  // Makes button fill the width of the list item
                                    justifyContent: 'center',
                                }}
                                onClick={() => handleDrawerClick(section.name)}
                            >
                                <ListItemText sx={{ textAlign: 'center' }}>
                                    <PageSection section={section.name} />
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
                        <ListItemButton sx={{ justifyContent: 'center', color: 'secondary.main' }}>
                            <Tooltip title={strings.clickAction}>
                                <LanguageSelector />
                            </Tooltip>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ justifyContent: 'center', color: 'secondary.main' }}>
                            <Tooltip title={strings.clickAction}>
                                <ThemePicker />
                            </Tooltip>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ justifyContent: 'center', color: 'secondary.main' }}>
                            <Download />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default SideBar;
