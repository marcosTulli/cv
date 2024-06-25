import React from 'react';
import Image from 'next/image';
import { IExperience, IJobs } from '@/app/types';
import styles from "./JobCard.module.scss";

type JobCardProps = {
    data: IExperience;
    language: string;
};

const JobCard: React.FC<JobCardProps> = ({ data, language }) => {
    return (
        <div className={styles.jobCard}>
            <div className={styles.jobCardHeader}>
                <div className={styles.jobTitle}>{data.info.position}</div>
                <div className={styles.workingPeriod}>{data.activePeriod}</div>
            </div>
            <div className={styles.companyTitle} title={data.comapnyUrl}>
                <Image src={data.companyLogo} alt='phone-icon' width={15} height={15} />
                <a className={styles.companyName} href={data.comapnyUrl} target="_blank">
                    <div >{data.companyName}</div>
                </a>
            </div>
            <ul>

                {
                    data.info.tasks.map((task, index) => {
                        return (
                            <li key={task._id}>{task.task}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default JobCard;