'use client';
import React from 'react';
import styles from './Skill.module.scss';
import { ISkills } from '@/app/models/interfaces';
import Icon from '@/app/components/icon/Icon';

interface ISkillProps {
    skill: ISkills;
}

const Skill: React.FC<ISkillProps> = ({ skill }) => {

    return (
        <div className={styles.skill}>
            <Icon name={skill.name} />
            {<p>{skill.formattedName}</p>}
        </div>
    );
};

export default Skill;