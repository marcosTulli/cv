import React from 'react';
import { IExperience } from '@/app/models/interfaces';
import styles from "./JobCard.module.scss";
import { Box } from '@mui/material';

type JobCardProps = {
    experience: IExperience;
    language: string;
};

const JobCard: React.FC<JobCardProps> = ({ experience }) => {
    return (
        <Box className={styles.job} sx={{ color: 'secondary.main' }} >
            <Box component={'div'} sx={{ display: ' flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
                <Box component={'div'} className={styles.companyName}>{experience.companyName}</Box>
                <Box component={'div'} className={styles.jobTitle}>{experience.info.position}</Box>
            </Box>
            <p className={styles.jobDetails}>
                {experience.info.position} | {experience.activePeriod.startDate} - {
                    experience.activePeriod.endDate.length > 0
                        ? experience.activePeriod.endDate
                        : 'Present'}
            </p>
            <ul className={styles.jobDescription}>
                {
                    experience.info.tasks.map(task => {
                        return (
                            <li key={task._id}>{task.task}</li>
                        );
                    })
                }
            </ul>
        </Box>


    );
};

export default JobCard;