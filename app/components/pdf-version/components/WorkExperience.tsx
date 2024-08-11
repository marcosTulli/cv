import React from 'react';
import { Typography, } from '@mui/material';
import { useWorkExperience } from '@/app/hooks/queries';
import styles from '../SignlePageTemplate.module.scss';
import { userStore } from '@/app/store';
import { IExperience } from '@/app/models/interfaces';
import { languageStore } from '@/app/store';

const WorkExperience: React.FC = () => {
    const { strings, currentLanguage } = languageStore();
    const { user } = userStore();
    const { data } = useWorkExperience({ id: user._id, lang: currentLanguage });
    const experiences: IExperience[] = data ? data.experiences : [{ _id: '', activePeriod: '', comapnyUrl: '', companyLogo: '', companyName: '', info: { position: '', tasks: [{ _id: '', task: '' }] } }];
    return (
        <div className={styles.section}>
            <Typography variant="h4" className={styles.sectionTitle}>{strings.workExperience}</Typography>
            <div className={styles.experience}>
                {experiences?.map((experience) => (
                    <div key={experience._id}>
                        <Typography variant="h6" className={styles.jobTitle}>
                            {experience.companyName}
                        </Typography>
                        <Typography variant="body2">{experience.activePeriod}</Typography>
                        <Typography variant="body2">{experience.info.position}</Typography>
                        <ul>
                            {experience.info.tasks.map((task) => (
                                <li key={task._id}>{task.task}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default WorkExperience;