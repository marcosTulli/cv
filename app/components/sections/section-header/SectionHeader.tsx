import React from 'react';
import styles from './SectionHeader.module.scss';
import { Container } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';  // Ensure skeleton styles are imported

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
                <div className={`${pageHeader ? styles.pageTitle : styles.sectionTitle}`}>
                    {isLoading
                        ? (<Skeleton height={pageHeader ? 50 : 30} width={pageHeader ? 200 : 300} />)
                        : (title)
                    }
                </div>

                <p className={styles.sectionDescription}>
                    {isLoading
                        ? (<Skeleton height={pageHeader ? 50 : 30} width={pageHeader ? 100 : 400} />)
                        : (description)}
                </p>
            </div>
        </Container>
    );
};

export default SectionHeader;
