
import React from 'react';
import JobCard from "@/app/components/JobCard";
import jobsData from "@/app/assets/jobs-data";
import { useLanguage } from "@/app/contexts/LanguageContext";

const WorkExperience = () => {
    const { lang, trans: strings } = useLanguage();
    return (
        <div className="workExperience">
            <div className="sectionTitle">{strings.workExperience}</div>
            {jobsData.map((i) => {
                return <JobCard key={i.id} data={i} language={lang} />;
            })}
        </div>
    );
};

export default WorkExperience;