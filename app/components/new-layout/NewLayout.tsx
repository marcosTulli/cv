import React from 'react';
import styles from './NewLayout.module.scss';
import { userStore } from '@/app/store';
import { useLanguage } from '@/app/hooks';
import { useEducation, useSkills } from '@/app/hooks/queries';
import Skill from '../skill/Skill';
import Header from '../header/Header';
import WorkExperience from '../work-experience/WorkExperience';


const App = () => {
    const { currentLanguage, strings } = useLanguage();
    const { user } = userStore();
    const { data: education } = useEducation({ id: user._id, lang: currentLanguage });
    const { data: skillsData } = useSkills({ id: user._id });
    return (
        <div className={styles.mainContainer}>
            <Header />
            <main>
                <WorkExperience />
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>{strings.education}</span>
                        <h2 className={styles.sectionTitle}>Academic Background</h2>
                        <p className={styles.sectionDescription}>
                            Explore my educational journey and the degrees I have obtained.
                        </p>
                    </div>
                    <div className={`${styles.flexGrid} py-12 ${styles.gridTwoCols}`}>
                        <div className={styles.flexColumn}>
                            {education?.map(school => {
                                return (
                                    <div key={school.id} className={styles.education}>
                                        <h3 className={styles.educationTitle}>{school.title}</h3>
                                        <p className={styles.educationDetails}>{school.content}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>{strings.skills}</span>
                        <h2 className={styles.sectionTitle}>Skills</h2>
                        <p className={styles.sectionDescription}>
                            I possess a diverse set of skills that enable me to deliver high-quality work.
                        </p>
                    </div>
                    <div className={`${styles.flexGrid} py-12 ${styles.gridThreeCols}`}>
                        {skillsData?.skills?.map(skill => {
                            return (
                                <div key={skill._id} className={styles.skill}>
                                    <Skill skill={skill} />
                                </div>

                            );
                        })}
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>Work</span>
                        <h2 className={styles.sectionTitle}>My Work</h2>
                        <p className={styles.sectionDescription}>
                            Explore the projects I have worked on and the impact I have made.
                        </p>
                    </div>
                    <div className={`${styles.flexGrid} py-12 ${styles.gridTwoCols}`}>
                        <div className={styles.flexColumn}>
                            <div className={styles.project}>
                                <h3 className={styles.projectTitle}>Acme Website</h3>
                                <p className={styles.projectDetails}>Developed and maintained a complex web application for Acme Inc.</p>
                                <ul className={styles.projectDescription}>
                                    <li>Implemented new features using React, Node.js, and MongoDB.</li>
                                    <li>Optimized application performance and scalability.</li>
                                    <li>Participated in agile development processes.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.flexGrid} py-12 ${styles.gridTwoCols}`}>
                        <div className={styles.flexColumn}>
                            <div className={styles.project}>
                                <h3 className={styles.projectTitle}>Foodie App</h3>
                                <p className={styles.projectDetails}>
                                    Designed and implemented user-friendly web interfaces for Foodie Inc.
                                </p>
                                <ul className={styles.projectDescription}>
                                    <li>Designed interfaces using Figma and Photoshop.</li>
                                    <li>Collaborated with developers to ensure seamless integration.</li>
                                    <li>Conducted user research and usability testing.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className={styles.footer}>
                <p className={styles.footerText}>© 2024 {user.name}. All rights reserved.</p>
                <nav className={styles.footerNav}>
                    <a className={styles.footerLink} href="#">Terms of Service</a>
                    <a className={styles.footerLink} href="#">Privacy</a>
                </nav>
            </footer>
        </div>
    );
};

export default App;
