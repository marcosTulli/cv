import React from 'react';
import Image from 'next/image';
import { IExperience } from '@/app/types';
import styles from "./JobCard.module.scss";
import { Skeleton } from '@mui/material';


type JobCardProps = {
    data: IExperience;
    isLoading: boolean;
};

const JobCard: React.FC<JobCardProps> = ({ data, isLoading }) => {
    return (
        <div className={styles.jobCard}>
            <div className={styles.jobCardHeader}>
                <div className={styles.jobTitle}>

                    {
                        !isLoading
                            ? data.info.position
                            : <Skeleton variant="rectangular" style={{ borderRadius: '1rem', marginTop: '0.5rem' }} width={210} height={10} />
                    }

                </div>
                <div className={styles.workingPeriod}>
                    {
                        !isLoading
                            ? data.activePeriod
                            : <Skeleton variant="rectangular" style={{ borderRadius: '1rem', marginTop: '0.5rem' }} width={210} height={10} />
                    }</div>
            </div>
            <div className={styles.companyTitle} title={data.comapnyUrl}>
                <Image src={data.companyLogo} alt='phone-icon' width={15} height={15} />
                <a className={styles.companyName} href={data.comapnyUrl} target="_blank">
                    <div >{data.companyName}</div>
                </a>
            </div>
            <ul>

                {
                    !isLoading
                        ? data.info.tasks.map((task, index) => {
                            return (
                                <li key={task._id}>{task.task}</li>
                            );
                        })
                        : [...Array(3)].map((_, index) => {
                            return (
                                <li key={index}>
                                    <Skeleton variant="rectangular" style={{ borderRadius: '1rem', marginTop: '0.5rem' }} width={310} height={10} />
                                </li>
                            );
                        })
                }
            </ul>
        </div>
    );
};

export default JobCard;