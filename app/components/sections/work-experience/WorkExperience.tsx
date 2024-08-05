import React from 'react';
import styles from "./WorkExperience.module.scss";
import WorkExperienceBody from './WorkExperienceBody';
import SectionHeader from '../section-header/SectionHeader';
import { useLanguage } from '@/app/hooks';
import { Sections } from '@/app/models/enums';
import useSectionRef from '../hooks/useSectionRef';

const WorkExperience: React.FC = () => {
    const { strings } = useLanguage();
    const { sectionRef } = useSectionRef({ sectionName: Sections.WorkExperience });

    return (
        <section ref={sectionRef} className={styles.section}>
            <SectionHeader
                title={strings.workExperience}
                description={strings.workExperienceDescription}
            />
            <WorkExperienceBody />
        </section>

    );
};

export default WorkExperience;

