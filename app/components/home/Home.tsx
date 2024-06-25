'use client';
import styles from './Home.module.scss';
import * as React from 'react';
import Header from '@/app/components/header/Header';
import WorkExperience from '@/app/components/work-experience/WorkExperience';
import Qualifications from '@/app/components/qualifications/Qualifications';
import Info from '@/app/components/info/Info';
import { useMediaQuery } from '@mui/material';
import { useUsers, useUser } from '@/app/hooks/queries';
import { userStore } from '@/app/store';
import { IUser } from '@/app/types';
import { useLanguage } from '@/app/hooks';

export default function Home() {
    const { data: users } = useUsers();
    const { currentLanguage } = useLanguage();
    // This will change when I implement login, and/or user selection. 
    const userId = users ? users[1]._id : '';
    const { data: user } = useUser({ lang: currentLanguage, id: userId });

    const { setUser } = userStore();

    React.useEffect(() => {
        if (currentLanguage && users && users?.length > 0) {
            if (user !== undefined) {
                setUser(user as IUser);
            }
        }
    }, [users, user, currentLanguage]);

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
