import React from 'react';
import styles from './NavBar.module.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import useScroll from '@/app/components/nav-bar/hooks/useScroll';
import { Sections } from '@/app/models/enums';
import { useIsLoadingSections, useLanguage } from '@/app/hooks';
import useDownload from './hooks/useDownload';

const NavBar: React.FC = () => {
    const { scroll } = useScroll();
    const { strings } = useLanguage();
    const sections = Object.keys(Sections).filter((i) =>
        i !== Sections.Header && i !== Sections.PrintableTemplate
    );
    const { handleDownload } = useDownload();
    const { isLoadingSections } = useIsLoadingSections();

    return (
        <div className={styles.navContainer}>
            <HomeOutlinedIcon
                className={styles.navSection}
                onClick={() => scroll(Sections.Header)}
            />
            {sections.map((section, index) => {
                return (
                    <div
                        key={index}
                        className={styles.navSection}
                        onClick={() => scroll(section)}
                    >
                        {section}
                    </div>
                );
            })}
            <button
                disabled={isLoadingSections}
                className={styles.downloadButton}
                onClick={handleDownload}
            >
                {strings.dropdownOptionsDownload}
            </button>
        </div>
    );
};

export default NavBar;