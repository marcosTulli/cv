import React from 'react';
import JobCard from "@/app/components/job-card/JobCard";
import jobsData from "@/app/assets/jobs-data";
// import { useLanguage } from "@/app/contexts/LanguageContext";
import { useLanguage } from '@/app/hooks';
import styles from "./WorkExperience.module.scss";

const WorkExperience = () => {
    const { lang, trans: strings } = useLanguage();
    const colors: { [key: number]: string; } = {
        1: styles.blue,
        2: styles.peach,
        3: styles.lightPurple,
    };

    return (
        <div className={styles.workExperience}>
            <div className={styles.sectionTitle} >{strings.workExperience}</div>
            {jobsData.map((i) => {
                const shadowColor = colors[i.id] || '#CCCCCC';
                const cardStyle = {
                    marginBottom: '2rem',
                    borderRadius: "0.75rem",
                    boxShadow: `15px 15px 0px 0px ${shadowColor}`,
                };

                return (
                    <div key={i.id} className={styles.jobCard} style={cardStyle} >
                        <JobCard data={i} language={lang} />
                    </div>
                );
            })}
        </div >
    );
};

export default WorkExperience;

