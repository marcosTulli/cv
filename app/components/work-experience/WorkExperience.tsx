import React from 'react';
import JobCard from "@/app/components/job-card/JobCard";
import jobsData from "@/app/assets/jobs-data";
import { useLanguage } from "@/app/contexts/LanguageContext";
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
            <div className="sectionTitle">{strings.workExperience}</div>
            {jobsData.map((i) => {
                // Get the color for the specific id or default to a fallback color
                const shadowColor = colors[i.id] || '#CCCCCC';
                // Apply the selected color as a shadow;
                const cardStyle = {
                    borderRadius: "0.75rem",
                    boxShadow: `15px 15px 0px 0px ${shadowColor}`,
                };

                return (
                    <div key={i.id} className="jobCardWrapper" style={cardStyle} >
                        <JobCard data={i} language={lang} />
                    </div>
                );
            })}
        </div >
    );
};

export default WorkExperience;















    // // Mapping between id and color






















// import React from 'react';
// import JobCard from "@/app/components/JobCard";
// import jobsData from "@/app/assets/jobs-data";
// import { useLanguage } from "@/app/contexts/LanguageContext";

// const WorkExperience = () => {
//     const { lang, trans: strings } = useLanguage();

//     // Array of available shadow colors
//     const shadowColors = ['#3DC39B', '#FE74A6', '#5B6DFF'];

//     return (
//         <div className="workExperience">
//             <div className="sectionTitle">{strings.workExperience}</div>
//             {jobsData.map((i) => {
//                 // Randomly select a shadow color
//                 const randomColor = shadowColors[Math.floor(Math.random() * shadowColors.length)];
//                 // Apply the selected color as a shadow
//                 const cardStyle = {
//                     borderRadius: "0.75rem",
//                     boxShadow: `15px 15px 0px 0px ${randomColor}`,
//                     // marginTop: "1rem"
//                 };

//                 return (
//                     <div key={i.id} className="jobCardWrapper" style={cardStyle}>
//                         <JobCard data={i} language={lang} />
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default WorkExperience;













// import React from 'react';
// import JobCard from "@/app/components/JobCard";
// import jobsData from "@/app/assets/jobs-data";
// import { useLanguage } from "@/app/contexts/LanguageContext";

// const WorkExperience = () => {
//     const { lang, trans: strings } = useLanguage();
//     return (
//         <div className="workExperience">
//             <div className="sectionTitle">{strings.workExperience}</div>
//             {jobsData.map((i) => {
//                 return <JobCard key={i.id} data={i} language={lang} />;
//             })}
//         </div>
//     );
// };

// export default WorkExperience;