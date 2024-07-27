import React from 'react';
import styles from './Header.module.scss';
import { userStore } from '@/app/store';

const Header: React.FC = () => {
    const { user } = userStore();

    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <h1 className={styles.title}>{user.name}</h1>
                <p className={styles.subtitle}>{user.info.candidateTitle}</p>
            </div>
        </div>
    );
};

export default Header;