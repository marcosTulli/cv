import React from 'react';
import { Typography } from '@mui/material';
import styles from '../SignlePageTemplate.module.scss';
import { userStore } from '@/app/store';

const Header: React.FC = () => {
    const { user } = userStore();
    return (
        <div className={styles.header}>
            <Typography variant="h4" className={styles.sectionTitle}>{user.name}</Typography>
            <Typography variant="h6">{user.info.candidateTitle}</Typography>
            <div className={styles.contactInfo}>
                <Typography variant="body1">{user.email}</Typography>
                <Typography variant="body1">{user.phone}</Typography>
                <Typography variant="body1">Languages:</Typography>
                {user.info.languages.map((language) => (
                    <li key={language.language} className={styles.languageContainer}>
                        <Typography variant="body2" className={styles.language} >
                            {`* ${language.language}: ${language.level}`}
                        </Typography>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Header;