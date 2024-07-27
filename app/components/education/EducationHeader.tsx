import React from 'react';
import styles from './Education.module.scss';
import { useLanguage } from '@/app/hooks';

const EducationHeader = () => {
    const { strings } = useLanguage();
    return (

        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{strings.education}</h2>
            <p className={styles.sectionDescription}>
                Explore my educational journey and the degrees I have obtained.
            </p>
        </div>
    );
};

export default EducationHeader;