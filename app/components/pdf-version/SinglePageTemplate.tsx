'use client';
import React from 'react';
import styles from './SignlePageTemplate.module.scss'; // Replace with your actual CSS module file

const CV: React.FC = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1>[Your Name]</h1>
                <div className={styles.contactInfo}>
                    <p>Email: [your.email@example.com]</p>
                    <p>Phone: [Your Phone Number]</p>
                    <p>Address: [Your Address]</p>
                    <p>LinkedIn: [Your LinkedIn Profile]</p>
                </div>
            </div>
            <div className={styles.section}>
                <h2>Education</h2>
                <div className={styles.education}>
                    <p className={styles.schoolName}>[School Name]</p>
                    <p className={styles.degree}>[Degree]</p>
                    <p>[Year of Graduation]</p>
                </div>
            </div>
            <div className={styles.section}>
                <h2>Experience</h2>
                <div className={styles.experience}>
                    <p className={styles.jobTitle}>[Job Title]</p>
                    <p>[Company Name]</p>
                    <p>[Duration]</p>
                    <p>[Job Description]</p>
                </div>
            </div>
            <div className={styles.section}>
                <h2>Skills</h2>
                <div className={styles.skills}>
                    <p>[Skill 1]</p>
                    <p>[Skill 2]</p>
                    <p>[Skill 3]</p>
                </div>
            </div>
        </div>
    );
};

export default CV;
