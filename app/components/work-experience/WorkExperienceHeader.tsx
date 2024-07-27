import React from 'react';
import styles from './WorkExperience.module.scss';
import { useLanguage } from '@/app/hooks';

const WorkExperienceHeader = () => {
    const { strings } = useLanguage();

    return (
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{strings.professionalHistory}</h2>
            <p className={styles.sectionDescription}>
                Explore my professional journey and the diverse roles I have held.
            </p>
        </div>
    );
};

export default WorkExperienceHeader;