import * as React from 'react';
import JobCard from './job-card/JobCard';
import styles from './WorkExperience.module.scss';
import { languageStore } from '@/app/store';
import { IExperience } from '@/app/models/interfaces';

interface IWorkExperienceBody {
    data?: IExperience[];

};

const WorkExperienceBody: React.FC<IWorkExperienceBody> = ({ data }) => {
    const { currentLanguage } = languageStore();

    return (
        <div className={`${styles.flexGrid} py-12 ${styles.gridTwoCols}`}>
            <div className={styles.flexColumn}>
                {data?.map((experience) => {
                    return (
                        <JobCard key={experience._id} experience={experience} language={currentLanguage} />
                    );
                })}
            </div>
        </div>
    );
};

export default WorkExperienceBody;