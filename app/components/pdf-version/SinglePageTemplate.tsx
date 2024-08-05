// Import necessary modules and styles
import React from 'react';
import styles from './SignlePageTemplate.module.scss';
import { useLanguage } from '@/app/hooks';
import { userStore } from '@/app/store';
import { useEducation, useWorkExperience, useSkills } from '@/app/hooks/queries';
import { IExperience } from '@/app/models/interfaces';

const CV: React.FC = () => {
    const { strings, currentLanguage } = useLanguage();
    const { user } = userStore();
    const { data: education } = useEducation({ id: user._id, lang: currentLanguage });
    const { data: skills } = useSkills({ id: user._id });
    const { data } = useWorkExperience({ id: user._id, lang: currentLanguage });
    const experiences: IExperience[] = data ? data.experiences : [{ _id: '', activePeriod: '', comapnyUrl: '', companyLogo: '', companyName: '', info: { position: '', tasks: [{ _id: '', task: '' }] } }];

    return (
        <div className={styles.container}>
            {/* Header section */}
            <div className={styles.header}>
                <h1>{user.name}</h1>
                <div className={styles.contactInfo}>
                    <p>
                        {strings.email} {user.email}
                    </p>
                    <p>
                        {strings.phone} {user.phone}
                    </p>
                </div>
            </div>

            {/* Work experience section */}
            <div className={styles.section}>
                <h2>{strings.workExperience}</h2>
                <div className={styles.experience}>
                    {experiences.map((experience) => (
                        <div key={experience._id}>
                            <p className={styles.jobTitle}>{experience.companyName}</p>
                            <p>{experience.activePeriod}</p>
                            <p>{experience.info.position}</p>
                            <ul>
                                {experience.info.tasks.map((task) => (
                                    <li key={task._id}>{task.task}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education section */}
            <div className={styles.section}>
                <h2>{strings.education}</h2>
                <div className={styles.education}>
                    {education?.map((education) => (
                        <div key={education.id}>
                            <p className={styles.degree}>{education.title}</p>
                            <p>{education.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills section */}
            <div className={styles.section}>
                <h2>{strings.skills}</h2>
                <div className={styles.skills}>
                    {skills?.skills.map((skill) => (
                        <p key={skill._id}>{skill.formattedName}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CV;