import React from 'react';
import styles from "./WorkExperience.module.scss";
import WorkExperienceHeader from './WorkExperienceHeader';
import WorkExperienceBody from './WorkExperienceBody';

const WorkExperience: React.FC = () => {
    return (
        <section className={styles.section}>
            <WorkExperienceHeader />
            <WorkExperienceBody />
        </section>

    );
};

export default WorkExperience;

