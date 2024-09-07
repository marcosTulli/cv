import React from 'react';
import { Typography } from '@mui/material';
import styles from '../SignlePageTemplate.module.scss';
import { useEducation } from '@/app/hooks/queries';
import { languageStore, userStore } from '@/app/store';

const Education: React.FC = () => {
    const { currentLanguage } = languageStore();
    const { user } = userStore();
    const { data: educationData } = useEducation({ id: user._id, lang: currentLanguage });

    return (
        <div className={styles.education}>
            {educationData?.map((education) => (
                <div key={education.id}>
                    <Typography variant="h6" className={styles.degree}>{education.title}</Typography>
                    <Typography variant="body1">{education.content}</Typography>
                </div>
            ))}
        </div>
    );
};

export default Education;