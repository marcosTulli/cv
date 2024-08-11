import React from 'react';
import { useEducation } from '@/app/hooks/queries';
import styles from '../SignlePageTemplate.module.scss';
import { languageStore, userStore } from '@/app/store';
import { Typography } from '@mui/material';

const Education: React.FC = () => {
    const { strings, currentLanguage } = languageStore();
    const { user } = userStore();
    const { data: education } = useEducation({ id: user._id, lang: currentLanguage });
    return (
        <div className={styles.section}>
            <Typography variant="h5" className={styles.sectionTitle}>{strings.education}</Typography>
            <div className={styles.education}>
                {education?.map((education) => (
                    <div key={education.id}>
                        <Typography className={styles.degree}>
                            {education.title}
                        </Typography>
                        <Typography className={styles.content}>
                            {education.content}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Education;