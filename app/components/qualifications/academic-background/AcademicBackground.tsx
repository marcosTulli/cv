import React from 'react';
import styles from './AcademicBackground.module.scss';
import { useLanguage } from '@/app/hooks';
import { useEducation } from '@/app/hooks/queries';
import { userStore } from '@/app/store';

const AcademicBackground = () => {
    const { currentLanguage, strings } = useLanguage();
    const { user } = userStore();
    const { data: education } = useEducation({ id: user._id, lang: currentLanguage });
    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>{strings.education}</span>
                <h2 className={styles.sectionTitle}>Academic Background</h2>
                <p className={styles.sectionDescription}>
                    Explore my educational journey and the degrees I have obtained.
                </p>
            </div>
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
        </section>
    );
};

export default AcademicBackground;