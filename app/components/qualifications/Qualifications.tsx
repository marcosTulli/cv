import * as React from 'react';
import { useLanguage } from '@/app/hooks';
import styles from './Qualifications.module.scss';
import { useEducation, useSkills } from '@/app/hooks/queries';
import { userStore } from '@/app/store';
import Skill from '../skill/Skill';


const Qualifications = () => {
    const { currentLanguage, strings } = useLanguage();
    const { user } = userStore();
    const { data: education } = useEducation({ id: user._id, lang: currentLanguage });
    const { data: skillsData } = useSkills({ id: user._id });

    return (
        <>
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
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>{strings.skills}</span>
                    <h2 className={styles.sectionTitle}>Skills</h2>
                    <p className={styles.sectionDescription}>
                        I possess a diverse set of skills that enable me to deliver high-quality work.
                    </p>
                </div>
                <div className={`${styles.flexGrid} py-12 ${styles.gridThreeCols}`}>
                    {skillsData?.skills?.map(skill => {
                        return (
                            <div key={skill._id} className={styles.skill}>
                                <Skill skill={skill} />
                            </div>

                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Qualifications;