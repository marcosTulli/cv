import React from 'react';
import JobCard from "@/app/components/job-card/JobCard";
import { useLanguage } from '@/app/hooks';
import styles from "./WorkExperience.module.scss";
import useWorkExperience from '@/app/hooks/queries/useWorkExperience';
import { userStore } from '@/app/store';
import { IExperience } from '@/app/types';

const WorkExperience = () => {
    const { currentLanguage, strings } = useLanguage();
    const { user } = userStore();
    const { data } = useWorkExperience({ id: user._id, lang: currentLanguage });
    const experiences: IExperience[] = data ? data.experiences : [{ _id: '', activePeriod: '', comapnyUrl: '', companyLogo: '', companyName: '', info: { position: '', tasks: [{ _id: '', task: '' }] } }];
    const colors: { [key: number]: string; } = {
        1: styles.blue,
        2: styles.peach,
        3: styles.lightPurple,
    };

    return (
        <div className={styles.workExperience}>
            <div className={styles.sectionTitle} >{strings.workExperience}</div>
            {experiences.map((experience, index) => {
                const shadowColor = colors[index + 1] || '#CCCCCC';
                const cardStyle = {
                    marginBottom: '2rem',
                    borderRadius: "0.75rem",
                    boxShadow: `15px 15px 0px 0px ${shadowColor}`,
                };

                return (
                    <div key={experience._id} className={styles.jobCard} style={cardStyle} >
                        <JobCard data={experience} language={currentLanguage} />
                    </div>
                );
            })}
        </div >
    );
};

export default WorkExperience;

