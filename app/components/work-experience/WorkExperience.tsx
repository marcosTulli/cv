import React from 'react';
import JobCard from "@/app/components/job-card/JobCard";
import { useLanguage } from '@/app/hooks';
import styles from "./WorkExperience.module.scss";
import { useWorkExperience } from '@/app/hooks/queries';
import { userStore } from '@/app/store';
import { IExperience } from '@/app/models';

const WorkExperience = () => {
    const { currentLanguage, strings } = useLanguage();
    const { user } = userStore();
    const { data } = useWorkExperience({ id: user._id, lang: currentLanguage });
    const experiences: IExperience[] = data ? data.experiences : [{ _id: '', activePeriod: '', comapnyUrl: '', companyLogo: '', companyName: '', info: { position: '', tasks: [{ _id: '', task: '' }] } }];

    return (

        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{strings.professionalHistory}</h2>
                <p className={styles.sectionDescription}>
                    Explore my professional journey and the diverse roles I have held.
                </p>
            </div>
            <div className={`${styles.flexGrid} py-12 ${styles.gridTwoCols}`}>
                <div className={styles.flexColumn}>
                    {experiences.map((experience) => {
                        return (
                            <div key={experience._id} className={styles.jobCard}  >
                                <JobCard experience={experience} language={currentLanguage} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

    );
};

export default WorkExperience;

