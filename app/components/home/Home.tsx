import styles from './Home.module.scss';
import React from 'react';
import Header from '@/app/components/header/Header';
import WorkExperience from '@/app/components/work-experience/WorkExperience';
import Qualifications from '@/app/components/qualifications/Qualifications';
import Info from '@/app/components/info/Info';
import { useMediaQuery } from '@mui/material';

export default function Home() {
    const isMobile = useMediaQuery('(max-width: 500px)');
    return (
        <>
            {isMobile ? (
                <div className={styles.cvContainer}>
                    <Header />
                    <WorkExperience />
                    <Qualifications />
                </div>
            ) : (
                <div className={styles.cvContainer}>
                    <div className={styles.left}>
                        <Header />
                        <WorkExperience />
                    </div>
                    <div className={styles.right}>
                        <Info />
                        <Qualifications />
                    </div>
                </div>
            )}
        </>
    );
}
