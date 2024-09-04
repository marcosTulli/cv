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
            <Box component={'h3'} className={styles.jobTitle}>{experience.info.position}</Box>
            <p className={styles.jobDetails}>{`${experience.activePeriod.startDate} - ${experience.activePeriod.endDate}`}</p>
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