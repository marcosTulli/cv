import React from 'react';
import { Typography } from '@mui/material';
import styles from '../SignlePageTemplate.module.scss';
import { languageStore, userStore } from '@/app/store';
import { useWorkExperience } from '@/app/hooks/queries';
import { IExperience } from '@/app/models/interfaces';

const WorkExperience: React.FC = () => {

    const { currentLanguage } = languageStore();
    const { user } = userStore();
    const { data } = useWorkExperience({ id: user._id, lang: currentLanguage });
    const experiences: IExperience[] = data ? data.experiences : [{ _id: '', activePeriod: { startDate: '', endDate: '' }, comapnyUrl: '', companyLogo: '', companyName: '', info: { position: '', tasks: [{ _id: '', task: '' }] } }];

    return (
        <div className={styles.workExperience}>
            {experiences.map((experience) => (
                <div key={experience._id}>
                    <div className={styles.companyInfo}>
                        <Typography variant="h6" className={styles.companyName}>{experience.companyName}</Typography>
                        <Typography variant="body1" className={styles.positionAndPeriod}>
                            {experience.info.position} | {experience.activePeriod.startDate} - {experience.activePeriod.endDate}
                        </Typography>
                    </div>
                    <ul>
                        {experience.info.tasks.map((task) => (
                            <li key={task._id} className={styles.task}>
                                <Typography variant="body1">{task.task}</Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default WorkExperience;