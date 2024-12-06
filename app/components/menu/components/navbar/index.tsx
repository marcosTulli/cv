'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import useScroll from '@/app/components/menu/hooks/useScroll';
import { Sections } from '@/app/models/enums';
import { usePageSections } from '../../hooks';
import { languageStore } from '@/app/store';
import { Tooltip } from '@mui/material';
import ThemePicker from '@/app/components/theme-picker';
import LanguageSelector from '@/app/components/language-selector/LanguageSelector';
import { Download, PageSection } from '../items';

interface INavBarProps {
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<INavBarProps> = ({ setMobileOpen }) => {
    const { strings } = languageStore();
    const { scroll } = useScroll();
    const handleDrawerToggle = () => { setMobileOpen((prevState) => !prevState); };
    const { pageSections } = usePageSections();

    return (
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
                    <Button
                        sx={{ color: 'secondary.main' }}
                        onClick={() => scroll(Sections.Header)}
                    >
                        <Tooltip title={strings.clickAction} >
                            <HomeOutlinedIcon />
                        </Tooltip>

                    </Button>
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
                    {'  |  '}
                    <LanguageSelector />
                    <ThemePicker />
                    <Download />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;