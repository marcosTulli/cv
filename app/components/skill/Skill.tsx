'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Skill.module.scss';
import { ISkills } from '@/app/models';
import { useIcons } from '@/app/hooks/queries';

interface ISkillProps {
    skill: ISkills;
}
const Skill: React.FC<ISkillProps> = ({ skill }) => {
    const { data: icon } = useIcons({ fileKey: skill.fileKey });
    return (
        <div className={styles.skill}>
            <Image src={icon ? icon : ''} alt={skill.name} width={20} height={20} />
            {<p>{skill.name}</p>}
        </div>
    );
};

export default Skill;