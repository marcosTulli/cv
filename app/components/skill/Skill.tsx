'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Skill.module.scss';
import { ISkills } from '@/app/models';
import { useIcons, useIconKey } from '@/app/hooks/queries';

interface ISkillProps {
    skill: ISkills;
}
const Skill: React.FC<ISkillProps> = ({ skill }) => {
    const [fileKey, setFileKey] = React.useState("");
    const { data: key } = useIconKey({ name: skill.name });
    const { data: icon } = useIcons({ fileKey: fileKey });

    React.useEffect(() => {
        if (key) {
            setFileKey(key);
        }
    }, [key]);



    return (
        <div className={styles.skill}>
            <Image src={icon ? icon : ''} alt={skill.name} width={20} height={20} />
            {<p>{skill.formattedName}</p>}
        </div>
    );
};

export default Skill;