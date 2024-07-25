import React from 'react';
import styles from './Header.module.scss';
import { userStore } from '@/app/store';

const Header: React.FC = () => {
    // const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);
    const { user } = userStore();

    // const handleMenuClick = () => {
    //     setDisplayMenu(!displayMenu);
    // };

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{user.name}</h1>
            <p className={styles.subtitle}>{user.info.candidateTitle}</p>
        </header>
    );
};

export default Header;