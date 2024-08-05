import React from 'react';
import styles from './Skills.module.scss';
import SkillsBody from './SkillsBody';
import { useLanguage } from '@/app/hooks';
import SectionHeader from '../section-header/SectionHeader';
import { Sections } from '@/app/models/enums';
import useSectionRef from '../hooks/useSectionRef';

const Skills: React.FC = () => {
    const { strings } = useLanguage();
    const { sectionRef } = useSectionRef({ sectionName: Sections.Skills });

    return (
        <section
            ref={sectionRef}
            className={styles.container}
        >
            <SectionHeader
                title={strings.skills}
                description={strings.skillsDescription}
            />
            <SkillsBody />
        </section>
    );
};

export default Skills;