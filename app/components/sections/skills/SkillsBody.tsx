import * as React from 'react';
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import { ISkills, ISkillsResponse } from '@/app/models/interfaces';

interface ISkillsBody {
    skillsData?: ISkillsResponse;
}

const SkillsBody: React.FC<ISkillsBody> = ({ skillsData }) => {
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