import React from 'react';
import { useLanguage } from "@/app/contexts/LanguageContext";
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const { lang, toggleLang, trans: strings } = useLanguage();

    return (
        <div className={styles.headerContainer}>
            <div className={styles.about}>
                <div className={styles.headerTitle}>
                    <h1 className={styles.candidateName}>{strings.candidateName}</h1>
                </div>
                <h3>{strings.candidateTitle}</h3>
                <p className={styles.aboutText}>{strings.about}</p>
            </div>
        </div>
    );
};

export default Header;