import React from 'react';
import styles from './SectionHeader.module.scss';
import { Container, Skeleton } from '@mui/material';


interface ISectionHeaderProps {
    title: string | undefined;
    description: string | undefined;
    isLoading: boolean;
    pageHeader?: boolean;
}
const SectionHeader: React.FC<ISectionHeaderProps> = ({ title, description, isLoading, pageHeader }) => {

    return (
        <Container className={styles.sectionHeader}>
            <div>
                <div className={`${pageHeader ? styles.pageTitle : styles.sectionTitle}`} >{title}</div>
                <p className={styles.sectionDescription}>
                    {description}
                </p>
            </div>
        </Container>
    );
};

export default SectionHeader;