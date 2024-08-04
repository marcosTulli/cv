import React from 'react';
import styles from './NavBar.module.scss';
import * as sectionsExports from '@/app/components/sections';
import { sectionRefStore } from '@/app/store';


const NavBar: React.FC = () => {

    const sections = Object.keys(sectionsExports);

    const scrollToTarget = (sectionName: string) => {
        const { sectionRef } = sectionRefStore.getState();
        const targetElement = sectionRef[sectionName];
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.navContainer}>
            {sections.map((section, index) => {
                return (
                    <div onClick={() => scrollToTarget(section)} key={index} className={styles.navSection}>{section}</div>
                );
            })}
        </div>
    );
};

export default NavBar;