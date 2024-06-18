import styles from './Home.module.scss';
import React from 'react';
import Header from '@/app/components/header/Header';
import WorkExperience from '@/app/components/work-experience/WorkExperience';
import Qualifications from '@/app/components/qualifications/Qualifications';
import Info from '@/app/components/info/Info';
import { useMediaQuery } from '@mui/material';
import { useUsers, useUser } from '@/app/hooks/queries';

export default function Home() {
    const { data: users } = useUsers();
    const userId = users ? users[1]._id : '';
    const { data: user } = useUser({ id: userId });

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
