'use client';
import React from 'react';
import styles from './Contact.module.scss';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { userStore } from '@/app/store';
import { Box } from '@mui/material';

const Contact: React.FC = () => {
    const { user } = userStore();
    return (
        <Box

            sx={{ color: 'secondary.main' }}
            className={styles.contactInfoContainer}>
            <div className={styles.contact}>
                <LocalPhoneOutlinedIcon
                    className={styles.icon}
                />
                <div>{user.phone}</div>
            </div>
            <div className={styles.contact}>
                <EmailOutlinedIcon
                    className={styles.icon}
                />
                <div>{user.email}</div>
            </div>
        </Box>

    );

};

export default Contact;