import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styles from './NavBar.module.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import useScroll from '@/app/components/nav-bar/hooks/useScroll';
import { Sections } from '@/app/models/enums';
import { useIsLoadingSections } from '@/app/hooks';
import useDownload from './hooks/useDownload';
import { languageStore } from '@/app/store';
import ThemePicker from '../theme-picker/ThemePicker';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => { setMobileOpen((prevState) => !prevState); };
    const { scroll } = useScroll();
    const { strings } = languageStore();
    const { handleDownload } = useDownload();
    const { isLoadingSections } = useIsLoadingSections();


    const container = window !== undefined ? () => window().document.body : undefined;

    const navBarSections = [
        {
            name: 'Home',
            component:
                <Button
                    sx={{ color: 'secondary.main' }}
                    className={styles.navSection}
                    onClick={() => scroll(Sections.Header)}
                >
                    <HomeOutlinedIcon />
                </Button>

        },
        {
            name: Sections.WorkExperience,
            component:
                <Button
                    sx={{ color: 'secondary.main' }}
                    className={styles.navSection}
                    onClick={() => scroll(Sections.WorkExperience)}
                >
                    Work Experience
                </Button>

        },
        {
            name: Sections.Education,
            component:
                <Button
                    sx={{ color: 'secondary.main' }}
                    className={styles.navSection}
                    onClick={() => scroll(Sections.Education)}
                >
                    Education
                </Button>

        },
        {
            name: Sections.Skills,
            component:
                <Button
                    sx={{ color: 'secondary.main' }}
                    className={styles.navSection}
                    onClick={() => scroll(Sections.Skills)}
                >
                    Skills
                </Button>

        },
        {
            name: 'Download',
            component:
                <Button
                    sx={{ color: 'secondary.main' }}
                    disabled={isLoadingSections}
                    className={styles.downloadButton}
                    onClick={handleDownload}
                >
                    {strings.dropdownOptionsDownload}
                </Button>

        },
        {
            name: 'Theme picker',
            component: <ThemePicker />
        },
    ];
    const drawer = (
        <Box
            sx={{ textAlign: 'center', backgroundColor: 'primary.main', flexGrow: '1' }}>
            <Divider />
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
            <CssBaseline />
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
