import React from 'react';
import Image from 'next/image';
import { IExperience } from '@/app/models';
import styles from "./JobCard.module.scss";
import { useIconKey, useIcons } from '@/app/hooks/queries';

type JobCardProps = {
    experience: IExperience;
    language: string;
};

const JobCard: React.FC<JobCardProps> = ({ experience }) => {
    const [fileKey, setFileKey] = React.useState("");
    const formattedname = experience.companyLogo.split('.')[0].split('/')[1];
    const { data: key } = useIconKey({ name: formattedname });
    const { data: icon } = useIcons({ fileKey: fileKey });
    React.useEffect(() => {
        if (key) {
            setFileKey(key);
        }
    }, [key]);


    return (
        <div key={experience._id} className={styles.job}>
            <h3 className={styles.jobTitle}>{experience.info.position}</h3>
            <p className={styles.jobDetails}>{experience.activePeriod}</p>
            {/* <Image src={icon ? icon : ''} alt='phone-icon' width={15} height={15} />
            <a className={styles.companyName} href={experience.comapnyUrl} target="_blank">
                <div >{experience.companyName}</div>
            </a> */}
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


    );
};

export default JobCard;