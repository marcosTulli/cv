'use client';
import React from 'react';
import styles from './Social.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { userStore } from '@/app/store';
import { Box } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


interface ISocialProps {
    isLoading: boolean;
}
const Social: React.FC<ISocialProps> = ({ isLoading }) => {
    const { user } = userStore();

    return (
        isLoading
            ? <Box className={styles.socialContainer}>
                <Box className={styles.socialItem} height={56} >
                    <Skeleton className={styles.icon} height={24} width={24} />
                    <Skeleton height={14} width={150} />
                </Box>
                <Box className={styles.socialItem} height={56}>
                    <Skeleton className={styles.icon} height={24} width={24} />
                    <Skeleton height={14} width={130} />
                </Box>

            </Box>
            : <Box sx={{ color: 'secondary.main' }} className={styles.socialContainer}>
                <Box
                    component={'a'}
                    className={styles.socialItem}
                    sx={{ color: 'secondary.main' }}
                    href={user.network.linkedin.url}
                    target="_blank"
                    title={user.network.linkedin.url}
                >
                    <LinkedInIcon
                        className={styles.icon}
                        style={{ marginRight: '0.4rem' }}
                    />
                    <p>{user.network.linkedin.display}</p>
                </Box>
                <Box
                    component={'a'}
                    sx={{ color: 'secondary.main' }}
                    className={styles.socialItem}
                    href={user.network.github.url}
                    target="_blank"
                    title={user.network.github.url}
                >
                    <GitHubIcon
                        className={styles.icon}
                        style={{ marginRight: '0.4rem' }}
                    />
                    <p>{user.network.github.display}</p>
                </Box>
            </Box>

    );

};


export default Social;