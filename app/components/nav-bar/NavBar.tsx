import React from 'react';
import styles from './NavBar.module.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import useScroll from '@/app/components/nav-bar/hooks/useScroll';
import { Sections } from '@/app/models/enums';
import { useIsLoadingSections } from '@/app/hooks';
import useDownload from './hooks/useDownload';
import { languageStore } from '@/app/store';
import ThemePicker from '../theme-picker/ThemePicker';
import { Box, Button } from '@mui/material';

const NavBar: React.FC = () => {
    const { scroll } = useScroll();
    const { strings } = languageStore();
    const sections = Object.keys(Sections).filter((i) =>
        i !== Sections.Header && i !== Sections.PrintableTemplate
    );
    const { handleDownload } = useDownload();
    const { isLoadingSections } = useIsLoadingSections();

    return (
        <Box className={styles.navContainer}>
            <HomeOutlinedIcon
                className={styles.navSection}
                onClick={() => scroll(Sections.Header)}
            />
            {sections.map((section, index) => {
                return (
                    <Box
                        sx={{ color: 'secondary.main' }}
                        key={index}
                        className={styles.navSection}
                        onClick={() => scroll(section)}
                    >
                        {section}
                    </Box>
                );
            })}
            <Button
                sx={{ color: 'secondary.main' }}
                disabled={isLoadingSections}
                className={styles.downloadButton}
                onClick={handleDownload}
            >
                {strings.dropdownOptionsDownload}
            </Button>
            <ThemePicker />
        </Box>
    );
};

export default NavBar;