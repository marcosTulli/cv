import * as React from 'react';
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import { ISkills, ISkillsResponse } from '@/app/models/interfaces';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ISkillsBody {
    skillsData?: ISkillsResponse;
    isLoading: boolean;
}

const SkillsBody: React.FC<ISkillsBody> = ({ skillsData, isLoading }) => {
    return (
        <div className={styles.skillsGridContainer}>
            <div className={styles.skillGrid}>
                {isLoading
                    ? (
                        Array.from({ length: 30 }).map((_, index) => (
                            <div key={index} className={styles.skill}>
                                <Skeleton circle height={30} width={30} />
                                <Skeleton height={18} width={76} />
                            </div>
                        ))
                    )
                    : skillsData?.skills?.map((skill: ISkills) => (
                        <div key={skill._id} className={styles.skill}>
                            <Skill skill={skill} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SkillsBody;
