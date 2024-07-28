import React from 'react';
import styles from './Skills.module.scss';
import SkillsBody from './SkillsBody';
import { useLanguage } from '@/app/hooks';
import SectionHeader from '../section-header/SectionHeader';

const Skills: React.FC = () => {
    const { strings } = useLanguage();
    return (
        <section className={styles.container}>
            <SectionHeader
                title={strings.skills}
                description={strings.skillsDescription}
            />
            <SkillsBody />
        </section>
    );
};

export default Skills;