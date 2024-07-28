import React from 'react';
import JobCard from '../job-card/JobCard';
import styles from './WorkExperience.module.scss';
import { useWorkExperience } from '@/app/hooks/queries';
import { userStore } from '@/app/store';
import { IExperience } from '@/app/models';
import { useLanguage } from '@/app/hooks';


const WorkExperienceBody = () => {
    const { currentLanguage } = useLanguage();
    const { user } = userStore();
    const { data } = useWorkExperience({ id: user._id, lang: currentLanguage });
    const experiences: IExperience[] = data ? data.experiences : [{ _id: '', activePeriod: '', comapnyUrl: '', companyLogo: '', companyName: '', info: { position: '', tasks: [{ _id: '', task: '' }] } }];

    return (
        <div className={`${styles.flexGrid} py-12 ${styles.gridTwoCols}`}>
            <div className={styles.flexColumn}>
                {experiences.map((experience) => {
                    return (
                        <JobCard key={experience._id} experience={experience} language={currentLanguage} />
                    );
                })}
            </div>
        </div>
    );
};

export default WorkExperienceBody;