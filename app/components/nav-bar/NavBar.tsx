import React from 'react';
import styles from './NavBar.module.scss';
import * as sectionsExports from '@/app/components/sections';


const NavBar: React.FC = () => {
    const sections = Object.keys(sectionsExports);
    return (
        <div className={styles.navContainer}>
            {sections.map((section, index) => {
                return (
                    <div onClick={() => console.log(section)} key={index} className={styles.navSection}>{section}</div>
                );
            })}
        </div>
    );
};

export default NavBar;