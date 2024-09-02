import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import useScroll from '@/app/components/nav-bar/hooks/useScroll';
import { Sections } from '@/app/models/enums';
import { useIsLoadingSections } from '@/app/hooks';
import useDownload from './hooks/useDownload';
import { languageStore } from '@/app/store';
import ThemePicker from '../theme-picker/ThemePicker';
import { Tooltip } from '@mui/material';

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { strings } = languageStore();
    const { isLoadingSections } = useIsLoadingSections();
    const { handleDownload } = useDownload();
    const { scroll } = useScroll();
    const handleDrawerToggle = () => { setMobileOpen((prevState) => !prevState); };
    const container = window !== undefined ? () => window().document.body : undefined;



    const navBarSections = [
        {
            name: 'Home',
            component:
                <Button
                    sx={{ color: 'secondary.main' }}
                    onClick={() => scroll(Sections.Header)}
                >
                    <Tooltip title={strings.clickAction} >
                        <HomeOutlinedIcon />
                    </Tooltip>

                </Button>

        },
        {
            name: Sections.WorkExperience,
            component:
                <Tooltip title={strings.clickAction} >
                    <Button
                        title={strings.clickAction}
                        sx={{ color: 'secondary.main' }}
                        onClick={() => scroll(Sections.WorkExperience)}
                    >
                        {strings.workExperience}
                    </Button>
                </Tooltip>
        },
        {
            name: Sections.Education,
            component:
                <Tooltip title={strings.clickAction} >
                    <Button
                        title={strings.clickAction}
                        sx={{ color: 'secondary.main' }}
                        onClick={() => scroll(Sections.Education)}
                    >
                        {strings.education}
                    </Button>
                </Tooltip>

        },
        {
            name: Sections.Skills,
            component:
                <Tooltip title={strings.clickAction} >
                    <Button
                        title={strings.clickAction}
                        sx={{ color: 'secondary.main' }}
                        onClick={() => scroll(Sections.Skills)}
                    >
                        {strings.skills}
                    </Button>
                </Tooltip>

        },
        {
            name: 'Download',
            component:
                <Tooltip title={strings.downloadAction} >
                    <Button
                        sx={{ color: 'secondary.main' }}
                        disabled={isLoadingSections}
                        onClick={handleDownload}
                    >
                        {strings.dropdownOptionsDownload}
                    </Button>
                </Tooltip>

        },
        {
            name: 'Theme picker',
            component: <ThemePicker />
        },
    ];

    const drawer = (
        <Box
            sx={{ textAlign: 'center', backgroundColor: 'primary.main', flexGrow: '1' }}>
            <List>
                {navBarSections.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.component} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexWrap: 'nowrap', alignItems: 'center' }}>
                        {navBarSections.map(i => i.component)}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav >
                <Drawer
                    container={container}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
