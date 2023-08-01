import React from 'react';
import Image from 'next/image';
import { IJobs } from '../models/jobs';

type JobCardProps = {
    data: IJobs;
    language: string;
};
const JobCard: React.FC<JobCardProps> = ({ data, language }) => {
    const jobData = language === 'sp' ? data.sp : data.en;
    const tasks = language === 'sp' ? data.sp.tasks : data.en.tasks;
    return (
        <div className="jobCard">
            <div className='jobCardHeader'>
                <div className="jobTitle">{jobData.position}</div>
                <div className="workingPeriod">{jobData.activePeriod}</div>
            </div>
            <div className='companyTitle' title={jobData.comapnyUrl}>
                <Image src={jobData.companyLogo} alt='phone-icon' width={22} height={22} />
                <a className="companyName" href={jobData.comapnyUrl} target="_blank">
                    <div >{jobData.companyName}</div>
                </a>
            </div>
            <ul>

                {
                    tasks.map((task, index) => {
                        return (
                            <li key={index}>{task}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default JobCard;