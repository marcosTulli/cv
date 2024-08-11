import React from 'react';
import styles from './Education.module.scss';
import EducationBody from './EducationBody';
import SectionHeader from '../section-header/SectionHeader';
import { Sections } from '@/app/models/enums';
import useSectionRef from '../hooks/useSectionRef';
import { languageStore } from '@/app/store';

const Education: React.FC = () => {
    const { strings } = languageStore();
    const { sectionRef } = useSectionRef({ sectionName: Sections.Education });

    return (
        <section
            ref={sectionRef}
            className={styles.container}
        >
            <SectionHeader
                title={strings.education}
                description={strings.educationDescription}
            />
            <EducationBody />
        </section>
    );
};

export default Education;