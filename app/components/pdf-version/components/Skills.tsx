import React from 'react';
import { Typography } from '@mui/material';
import styles from '../SignlePageTemplate.module.scss';
import { useSkills } from '@/app/hooks/queries';
import { userStore } from '@/app/store';

const Skills: React.FC = () => {
    const { user } = userStore();
    const { data } = useSkills({ id: user._id });
    return (
        <div className={styles.skills}>
            {data?.skills.map((skill) => (
                <Typography key={skill._id} variant="body1" className={styles.skill}>{skill.formattedName}</Typography>
            ))}
        </div>
    );
};

export default Skills;