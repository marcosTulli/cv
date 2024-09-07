import React from 'react';
import { Typography } from '@mui/material';
import styles from '../SignlePageTemplate.module.scss';
import { useSkills } from '@/app/hooks/queries';
import { languageStore, userStore } from '@/app/store';

const Skills: React.FC = () => {
    const { user } = userStore();
    const { data } = useSkills({ id: user._id });
    const { strings } = languageStore();
    return (
        <div className={styles.skills}>
            {data?.skills.map((skill) => (
                <Typography key={skill._id} className={styles.skill}>{skill.formattedName}</Typography>
            ))}
        </div>
    );
};

export default Skills;