import React from 'react';
import Image from 'next/image';
import { IExperience } from '@/app/models';
import styles from "./JobCard.module.scss";
import { useIconKey, useIcons } from '@/app/hooks/queries';

type JobCardProps = {
    data: IExperience;
    language: string;
};

const JobCard: React.FC<JobCardProps> = ({ data }) => {
    const [fileKey, setFileKey] = React.useState("");
    const formattedname = data.companyLogo.split('.')[0].split('/')[1];
    const { data: key } = useIconKey({ name: formattedname });
    const { data: icon } = useIcons({ fileKey: fileKey });
    React.useEffect(() => {
        if (key) {
            setFileKey(key);
        }
    }, [key]);


    return (
        <div className={styles.jobCard}>
            <div className={styles.jobCardHeader}>
                <div className={styles.jobTitle}>{data.info.position}</div>
                <div className={styles.workingPeriod}>{data.activePeriod}</div>
            </div>
            <div className={styles.companyTitle} title={data.comapnyUrl}>
                <Image src={icon ? icon : ''} alt='phone-icon' width={15} height={15} />
                <a className={styles.companyName} href={data.comapnyUrl} target="_blank">
                    <div >{data.companyName}</div>
                </a>
            </div>
            <ul>

                {
                    data.info.tasks.map((task) => {
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