import React from 'react';
import { Typography } from '@mui/material';
import styles from '../SignlePageTemplate.module.scss';
import { useEducation } from '@/app/hooks/queries';
import { languageStore, userStore } from '@/app/store';

const Education: React.FC = () => {
    const { strings, currentLanguage } = languageStore();
    const { user } = userStore();
    const { data: educationData } = useEducation({ id: user._id, lang: currentLanguage });

    return (
        <div className={styles.education}>
            <Typography className={styles.sectionTitle}>{strings.education}</Typography>
            {educationData?.map((education) => (
                <div className={styles.educationItem} key={education.id}>
                    <Typography className={styles.degree}>{education.title}</Typography>
                    <Typography className={styles.college}>{education.content}</Typography>
                </div>
            ))}
        </div>
    );
};

export default Education;