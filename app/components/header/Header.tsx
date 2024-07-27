import React from 'react';
import styles from './Header.module.scss';
import { userStore } from '@/app/store';
import SectionHeader from '../section-header/SectionHeader';

const Header: React.FC = () => {
    const { user } = userStore();

    return (
        <div className={styles.headerContainer}>
            <SectionHeader
                title={user.name}
                description={user.info.candidateTitle}
                pageHeader
            />
        </div>
    );
};

export default Header;