import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { languageStore } from '@/app/store';
import { Tooltip } from '@mui/material';
import LanguageSelector from '@/app/components/language-selector/LanguageSelector';
import { usePageSections } from '../../hooks';
import ThemePicker from '@/app/components/theme-picker/ThemePicker';
import { Download } from '../items';

interface Props {
    window?: () => Window;
    mobileOpen: boolean;
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const drawerWidth = 240;

const SideBar: React.FC<Props> = ({ window, mobileOpen, setMobileOpen }) => {
    const { strings } = languageStore();
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
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
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth,
                },
            }}
        >
            <Box sx={{ textAlign: 'center', backgroundColor: 'primary.main', height: '100%' }}>
                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <ListItem disablePadding>
                        <ListItemButton sx={{ justifyContent: 'center', color: 'secondary.main' }}>
                            <Tooltip title={strings.clickAction}>
                                <HomeOutlinedIcon />
                            </Tooltip>
                        </ListItemButton>
                    </ListItem>
                    {pageSections.map((item) => (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton
                                sx={{ textAlign: 'center', color: 'secondary.main' }}
                                onClick={() => handleDrawerClick(item.name)}
                            >
                                <ListItemText primary={item.label} />
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
