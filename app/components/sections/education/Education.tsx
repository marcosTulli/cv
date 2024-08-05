import React from 'react';
import styles from './Education.module.scss';
import EducationBody from './EducationBody';
import SectionHeader from '../section-header/SectionHeader';
import { useLanguage } from '@/app/hooks';
import { Sections } from '@/app/models/enums';
import useSectionRef from '../hooks/useSectionRef';

const Education: React.FC = () => {
    const { strings } = useLanguage();
    const { sectionRef } = useSectionRef({ sectionName: Sections.Education });

    return (
        <section
            ref={sectionRef}
            className={styles.section}
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