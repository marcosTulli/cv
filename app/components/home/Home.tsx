import styles from './Home.module.scss';
import React from 'react';
import Header from '@/app/components/header/Header';
import WorkExperience from '@/app/components/work-experience/WorkExperience';
import Qualifications from '@/app/components/qualifications/Qualifications';
import Info from '@/app/components/info/Info';
import { useMediaQuery } from '@mui/material';

export default function Home() {
    const isMobile = useMediaQuery('(max-width: 500px)');

    const commonContent = (
        <>
            <Header />
            <WorkExperience />
        </>
    );
    const mobileContent = (
        <div className={styles.cvContainer}>
            {commonContent}
            <Qualifications />
        </div>
    );

    const desktopContent = (
        <div className={styles.cvContainer}>
            <div className={styles.left}>
                {commonContent}
            </div>
            <div className={styles.right}>
                <Info />
                <Qualifications />
            </div>
        </div>
    );

    return (
        <>
            {isMobile ? mobileContent : desktopContent}
        </>
    );
}
