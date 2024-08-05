import React from 'react';
import styles from './NavBar.module.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import useScroll from '@/app/components/nav-bar/hooks/useScroll';
import { Sections } from '@/app/models/enums';


const NavBar: React.FC = () => {
    const { scroll } = useScroll();
    const sections = Object.keys(Sections).filter((i) => i !== Sections.Header);

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
        </div>
    );
};

export default NavBar;