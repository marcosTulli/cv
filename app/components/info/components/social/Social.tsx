'use client';
import React from 'react';
import styles from './Social.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { userStore } from '@/app/store';
import { Box } from '@mui/material';

const Social: React.FC = () => {
    const { user } = userStore();

    return (
        <Box sx={{ color: 'secondary.main' }} className={styles.socialContainer}>
            <Box
                component={'a'}
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