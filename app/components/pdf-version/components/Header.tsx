import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../SignlePageTemplate.module.scss';
import { languageStore, userStore } from '@/app/store';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Header: React.FC = () => {
    const { user } = userStore();
    const { strings } = languageStore();
    return (
        <div className={styles.header}>
            <Typography className={styles.sectionTitle}>{user.name}</Typography>
            <Typography className={styles.candidateDescription} >{user.info.candidateTitle}</Typography>
            <div className={styles.contactInfo}>
                <Typography className={styles.contactItem}>
                    <LocalPhoneOutlinedIcon className={styles.icon} />{user.email}</Typography>
                <Typography className={styles.contactItem}>
                    <EmailOutlinedIcon className={styles.icon} />{user.phone} </Typography>
            </div>
            <Box>
                <Typography className={styles.languageTitle}>{strings.languages}:</Typography>
                <Box className={styles.languagesContainer}>
                    {user.info.languages.map((language) => (
                        <li key={language.language} className={styles.languageContainer}>
                            <Typography variant="body2" className={styles.language} >
                                {`* ${language.language}: ${language.level}`}
                            </Typography>
                        </li>
                    ))}
                </Box>
            </Box>
        </div>
    );
};

export default Header;