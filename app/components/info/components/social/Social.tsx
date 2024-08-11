'use client';
import React from 'react';
import styles from './Social.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { userStore } from '@/app/store';

const Social: React.FC = () => {
    const { user } = userStore();
    return (

        <div className={styles.links}>
            <a
                href={user.network.linkedin.url}
                target="_blank"
                title={user.network.linkedin.url}
            >
                <LinkedInIcon
                    style={{ marginRight: '0.4rem' }}
                />
                <p>{user.network.linkedin.display}</p>
            </a>
            <a
                href={user.network.github.url}
                target="_blank"
                title={user.network.github.url}
            >
                <GitHubIcon
                    style={{ marginRight: '0.4rem' }}
                />
                <p>{user.network.github.display}</p>
            </a>
        </div>

    );

};


export default Social;