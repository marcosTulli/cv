import React from 'react';
import styles from './SectionHeader.module.scss';

interface ISectionHeaderProps {
    title: string | undefined;
    description: string | undefined;
    pageHeader?: boolean;
}
const SectionHeader: React.FC<ISectionHeaderProps> = ({ title, description, pageHeader }) => {

    return (
        <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>{title}</div>
            <p className={styles.sectionDescription}>
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;