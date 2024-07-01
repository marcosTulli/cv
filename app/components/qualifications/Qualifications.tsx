import * as React from 'react';
import { useLanguage } from '@/app/hooks';
import styles from './Qualifications.module.scss';
import { useEducation, useSkills } from '@/app/hooks/queries';
import { userStore } from '@/app/store';
import Skill from '../skill/Skill';

const url = process.env.NEXT_PUBLIC_URL || '';

const Qualifications = () => {
    const { currentLanguage, strings } = useLanguage();
    const { user } = userStore();
    const { data: education } = useEducation({ id: user._id, lang: currentLanguage });
    const { data: skillsData } = useSkills({ id: user._id });

    return (
        <div className={styles.qualifications}>
            <h1></h1>
            <div className={styles.education}>
                <div className={styles.sectionTitle}>{strings.education}</div>
                <div className={styles.educationCard}>
                    <ul>
                        {education?.map((i) => {
                            const isUrl = i.url?.includes('http');
                            const filePath = `${url}${i.url}`;
                            return (
                                <li key={i.id}>
                                    <div className={styles.degree}>
                                        {
                                            (i.title === "React" || i.content.toLowerCase().includes('az')) ?
                                                <a
                                                    title="View certification"
                                                    href={isUrl ? i.url : filePath}
                                                    target="_blank">
                                                    <div>{i.title} </div>
                                                </a>
                                                :
                                                <div>{i.title}</div>
                                        }
                                    </div>
                                    <p>{i.content}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className={styles.skills}>
                <div className={styles.sectionTitle}>{strings.skills}</div>
                <div className={styles.skillsCard}>
                    {skillsData?.skills?.map(i => <Skill key={i._id} skill={i} />)}
                </div>
            </div>
        </div >

    );
};

export default Qualifications;