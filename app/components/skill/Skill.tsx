'use client';
import React from 'react';
// import Image from 'next/image';
import styles from './Skill.module.scss';
import { ISkills } from '@/app/models';
// import { useIcons, useIconKey } from '@/app/hooks/queries';
import Icon from '../icon/Icon';


interface ISkillProps {
    skill: ISkills;
}
const Skill: React.FC<ISkillProps> = ({ skill }) => {
    // const [fileKey, setFileKey] = React.useState("");
    // const { data: key } = useIconKey({ name: skill.name });
    // const { data: icon } = useIcons({ fileKey: fileKey });

    // React.useEffect(() => {
    //     if (key) {
    //         setFileKey(key);
    //     }
    // }, [key]);



    console.log(skill.name);
    return (
        <div className={styles.skill}>
            <Icon name={skill.name} />
            {<p>{skill.formattedName}</p>}
        </div>
    );
};

export default Skill;