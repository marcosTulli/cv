import React from 'react';
import styles from './Skills.module.scss';
import SkillsBody from './SkillsBody';
import SectionHeader from '../section-header/SectionHeader';
import { Sections } from '@/app/models/enums';
import useSectionRef from '../hooks/useSectionRef';
import { languageStore } from '@/app/store';

const Skills: React.FC = () => {
    const { strings } = languageStore();
    const { sectionRef } = useSectionRef({ sectionName: Sections.Skills });


    return (
        <section
            ref={sectionRef}
            className={styles.container}
        >
            <SectionHeader
                title={strings.skills}
                description={strings.skillsDescription}
                isLoading={true}
            />
            <SkillsBody />
        </section>
    );
};

export default Skills;