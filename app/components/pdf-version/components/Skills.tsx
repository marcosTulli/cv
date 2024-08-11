import React from 'react';
import { Typography, } from '@mui/material';
import { languageStore } from '@/app/store';
import { useSkills } from '@/app/hooks/queries';
import styles from '../SignlePageTemplate.module.scss';
import { userStore } from '@/app/store';

const Skills: React.FC = () => {
    const { strings } = languageStore();
    const { user } = userStore();
    const { data: skills } = useSkills({ id: user._id });
    return (
        <div className={styles.section}>
            <Typography variant="h5" className={styles.sectionTitle}>{strings.skills}</Typography>
            <ul className={styles.skills}>
                {skills?.skills.map((skill) => (
                    <li key={skill._id} className={styles.skill}>
                        {skill.formattedName}
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default Skills;