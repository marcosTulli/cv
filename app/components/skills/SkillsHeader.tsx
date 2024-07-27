import React from 'react';
import styles from './Skills.module.scss';
import { useLanguage } from '@/app/hooks';

const SkillsHeader = () => {
    const { strings } = useLanguage();
    return (

        <div className={styles.skillsHeader}>
            <h2 className={styles.sectionTitle}>{strings.skills}</h2>
            <p className={styles.sectionDescription}>
                I possess a diverse set of skills that enable me to deliver high-quality work.
            </p>
        </div>

    );
};

export default SkillsHeader;