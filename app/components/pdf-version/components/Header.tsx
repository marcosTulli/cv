import React from 'react';
import { Typography } from '@mui/material';
import { useLanguage } from '@/app/hooks';
import styles from '../SignlePageTemplate.module.scss';
import { userStore } from '@/app/store';

const Header: React.FC = () => {
    const { strings } = useLanguage();
    const { user } = userStore();
    return (

        <div className={styles.header}>
            <Typography variant="h4" className={styles.sectionTitle}>{user.name}</Typography>
            <Typography variant="h6">{user.info.candidateTitle}</Typography>

            <div className={styles.contactInfo}>
                <Typography variant="body1">{strings.email} {user.email}</Typography>
                <Typography variant="body1">{strings.phone} {user.phone}</Typography>
                <Typography variant="body1">{strings.languages}</Typography>
                {user.info.languages.map((language) => (
                    <div key={language.language} className={styles.languageContainer}>
                        <Typography variant="body2" className={styles.language} >
                            {` * ${language.language}: ${language.level}`}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;