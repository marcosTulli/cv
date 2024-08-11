import React from 'react';
import styles from './SectionHeader.module.scss';
import Info from '../../info/Info';

interface ISectionHeaderProps {
    title: string | undefined;
    description: string | undefined;
    pageHeader?: boolean;
}
const SectionHeader: React.FC<ISectionHeaderProps> = ({ title, description, pageHeader }) => {

    return (
        <div className={styles.sectionHeader}>
            <div>
                <div className={`${pageHeader ? styles.pageTitle : styles.sectionTitle}`} >{title}</div>
                <p className={styles.sectionDescription}>
                    {description}
                </p>
            </div>
            {
                pageHeader && (
                    <Info />
                )
            }
        </div>
    );
};

export default SectionHeader;