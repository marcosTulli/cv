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
                                <Skeleton circle height={20} width={20} />
                                <Skeleton height={15} width={30} />
                            </div>
                        ))
                    )
                    : skillsData?.skills?.map((skill: ISkills) => (
                        <Skill key={skill._id} skill={skill} />
                    ))
                }
            </div>
        </div>
    );
};

export default SkillsBody;
