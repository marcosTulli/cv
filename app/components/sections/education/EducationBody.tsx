import React from 'react';
import { useLanguage } from '@/app/hooks';
import { useEducation } from '@/app/hooks/queries';
import { userStore } from '@/app/store';
import styles from './Education.module.scss';

const EducationBody = () => {
    const { user } = userStore();
    const { currentLanguage } = useLanguage();
    const { data: education } = useEducation({ id: user._id, lang: currentLanguage });

    return (
        <div className={`${styles.flexGrid} py-12 ${styles.gridTwoCols}`}>
            <div className={styles.flexColumn}>
                {education?.map(school => {
                    return (
                        <div key={school.id} className={styles.education}>
                            <h3 className={styles.educationTitle}>{school.title}</h3>
                            <p className={styles.educationDetails}>{school.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EducationBody;