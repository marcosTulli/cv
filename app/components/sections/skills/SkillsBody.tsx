import React from 'react';
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import { userStore } from '@/app/store';
import { useSkills } from '@/app/hooks/queries';
import { ISkills } from '@/app/models/interfaces';

const SkillsBody = () => {
    const { user } = userStore();
    const { data: skillsData } = useSkills({ id: user._id });
    return (

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
    );
};

export default SkillsBody;