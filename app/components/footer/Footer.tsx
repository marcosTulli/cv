import React from 'react';
import styles from './Footer.module.scss';
import { userStore } from '@/app/store';

const Footer = () => {
    const { user } = userStore();
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>© 2024 {user.name}. All rights reserved.</p>
        </footer>
    );
};

export default Footer;