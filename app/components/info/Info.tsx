'use client';
import React from 'react';
import styles from './Info.module.scss';
import Social from './components/social/Social';
import Contact from './components/contact/Contact';
import Languages from './components/languages/Languages';
import ProfilePicture from './components/profile-picture/ProfilePicture';
import { userStore } from '@/app/store';
import InfoSkeleton from './components/info-skeleton/InfoSkeleton';
import { useIsLoadingSections } from '@/app/hooks';
import { Box } from '@mui/material';

const Info: React.FC = () => {
    const { isLoadingUser } = userStore();
    const { isLoadingSections } = useIsLoadingSections();

    return (
        <Box
            sx={{ bgcolor: 'defaultBackground.main' }}
            className={styles.info}>
            {
                isLoadingUser || isLoadingSections
                    ? (<InfoSkeleton />)
                    : (
                        <Box className={styles.infoGrid}>
                            <ProfilePicture />
                            <Contact />
                            <Social />
                            <Languages />
                        </Box>
                    )
            }
        </Box>

    );
};

export default Info;