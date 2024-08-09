import React from 'react';
import { Typography, } from '@mui/material';
import { useLanguage } from '@/app/hooks';
import { useSkills } from '@/app/hooks/queries';
import styles from '../SignlePageTemplate.module.scss';
import { userStore } from '@/app/store';

const Skills: React.FC = () => {
    const { strings } = useLanguage();
    const { user } = userStore();
    const { data: skills } = useSkills({ id: user._id });
    return (
        <div className={styles.section}>
            <Typography variant="h5" className={styles.sectionTitle}>{strings.skills}</Typography>
            <div className={styles.skills}>
                {skills?.skills.map((skill) => (
                    <Typography key={skill._id} className={styles.skill}>
                        {skill.formattedName}
                    </Typography>
                ))}
            </div>
        </div>

    );
};

export default Skills;