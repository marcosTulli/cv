import React from 'react';
import styles from './Skills.module.scss';
import SkillsHeader from './SkillsHeader';
import SkillsBody from './SkillsBody';


const Skills = () => {
    return (
        <section className={styles.container}>
            <SkillsHeader />
            <SkillsBody />
        </section>
    );
};

export default Skills;