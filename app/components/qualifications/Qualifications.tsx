import React from 'react';
import educationData from "@/app/assets/education-data";
import skillsData from "@/app/assets/skills-data";
// import { useLanguage } from "@/app/contexts/LanguageContext";
import { useLanguage } from '@/app/hooks';
import Image from "next/image";
import { Language } from "@/app/types";
import styles from './Qualifications.module.scss';
import { useEducation } from '@/app/hooks/queries';
import { userStore } from '@/app/store';

const url = process.env.NEXT_PUBLIC_URL || '';

const Qualifications = () => {
    const { currentLanguage, strings } = useLanguage();
    const { user } = userStore();
    const { data } = useEducation({ id: user._id, lang: currentLanguage });

    return (
        <div className={styles.qualifications}>
            <div className={styles.education}>
                <div className={styles.sectionTitle}>{strings.education}</div>
                <div className={styles.educationCard}>
                    <ul>
                        {data?.map((i) => {
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
                    {skillsData.map((i) => {
                        return (
                            <div key={i.id} className={styles.skill}>
                                <Image src={i.url} alt={i.name} width={20} height={20} />
                                {<p>{i.name}</p>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div >

    );
};

export default Qualifications;