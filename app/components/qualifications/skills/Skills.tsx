import React from 'react';
import styles from './Skills.module.scss';
import Skill from '../../skill/Skill';
import { useLanguage } from '@/app/hooks';
import { userStore } from '@/app/store';
import { useSkills } from '@/app/hooks/queries';


const Skills = () => {
    const { strings } = useLanguage();
    const { user } = userStore();
    const { data: skillsData } = useSkills({ id: user._id });
    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>{strings.skills}</span>
                <h2 className={styles.sectionTitle}>Skills</h2>
                <p className={styles.sectionDescription}>
                    I possess a diverse set of skills that enable me to deliver high-quality work.
                </p>
            </div>
            <div className={`${styles.flexGrid} py-12 ${styles.gridThreeCols}`}>
                {skillsData?.skills?.map(skill => {
                    return (
                        <div key={skill._id} className={styles.skill}>
                            <Skill skill={skill} />
                        </div>

                    );
                })}
            </div>
        </section>
    );
};

export default Skills;