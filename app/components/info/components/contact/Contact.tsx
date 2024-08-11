'use client';
import React from 'react';
import styles from './Contact.module.scss';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { userStore } from '@/app/store';

const Contact: React.FC = () => {
    const { user } = userStore();
    return (
        <div className={styles.contactInfoContainer}>
            <div className={styles.contact}>
                <LocalPhoneOutlinedIcon />
                <div>{user.phone}</div>
            </div>
            <div className={styles.contact}>
                <EmailOutlinedIcon />
                <div>{user.email}</div>
            </div>
        </div>

    );

};

export default Contact;