import React from 'react';
import styles from "./WorkExperience.module.scss";
import WorkExperienceBody from './WorkExperienceBody';
import SectionHeader from '../section-header/SectionHeader';
import { useLanguage } from '@/app/hooks';

const WorkExperience: React.FC = () => {
    const { strings } = useLanguage();
    return (
        <section className={styles.section}>
            <SectionHeader title={strings.workExperience} description={strings.workExperienceDescription} />
            <WorkExperienceBody />
        </section>

    );
};

export default WorkExperience;

