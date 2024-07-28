import React from 'react';
import styles from './Education.module.scss';
import EducationBody from './EducationBody';
import SectionHeader from '../section-header/SectionHeader';
import { useLanguage } from '@/app/hooks';

const Education: React.FC = () => {
    const { strings } = useLanguage();
    return (
        <section className={styles.section}>
            <SectionHeader title={strings.education} description={strings.educationDescription} />
            <EducationBody />
        </section>
    );
};

export default Education;