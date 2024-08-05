import React from 'react';
import styles from './NavBar.module.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import useScroll from '@/app/components/nav-bar/hooks/useScroll';
import { Sections } from '@/app/components/sections';

const NavBar: React.FC = () => {
    const { scroll } = useScroll();

    return (
        <div className={styles.navContainer}>
            <HomeOutlinedIcon className={styles.navSection} onClick={() => scroll('Header')} />
            {Sections.map((section, index) => {
                return (
                    <div onClick={() => scroll(section)} key={index} className={styles.navSection}>{section}</div>
                );
            })}
        </div>
    );
};

export default NavBar;