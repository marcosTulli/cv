import React from 'react';
import { IExperience } from '@/app/models/interfaces';
import styles from "./JobCard.module.scss";

type JobCardProps = {
    experience: IExperience;
    language: string;
};

const JobCard: React.FC<JobCardProps> = ({ experience }) => {
    return (
        <div >
            <div key={experience._id} className={styles.job}>
                <h3 className={styles.jobTitle}>{experience.info.position}</h3>
                <p className={styles.jobDetails}>{experience.activePeriod}</p>
                <ul className={styles.jobDescription}>
                    {
                        experience.info.tasks.map(task => {
                            return (
                                <li key={task._id}>{task.task}</li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>


    );
};

export default JobCard;