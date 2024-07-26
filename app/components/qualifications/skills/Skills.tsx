import React from 'react';
import styles from './Skills.module.scss';
import Skill from '../../skill/Skill';
import { useLanguage } from '@/app/hooks';
import { userStore } from '@/app/store';
import { useSkills } from '@/app/hooks/queries';
import { ISkills } from '@/app/models';


const Skills = () => {
    const { strings } = useLanguage();
    const { user } = userStore();
    const { data: skillsData } = useSkills({ id: user._id });

    return (
        <section className={styles.container}>
            <div className={styles.skillsHeader}>
                <h2 className={styles.sectionTitle}>{strings.skills}</h2>
                <p className={styles.sectionDescription}>
                    I possess a diverse set of skills that enable me to deliver high-quality work.
                </p>
            </div>
            <div className={styles.skillsGridContainer}>
                <div className={styles.skillGrid}>
                    {skillsData?.skills?.map((skill: ISkills) => {
                        return (
                            <div key={skill._id} className={styles.skill}>
                                <Skill skill={skill} />
                            </div>

                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;