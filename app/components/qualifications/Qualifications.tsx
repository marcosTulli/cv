import React from 'react';
import educationData from "@/app/assets/education-data";
import skillsData from "@/app/assets/skills-data";
// import { useLanguage } from "@/app/contexts/LanguageContext";
import { useLanguage } from '@/app/hooks';
import Image from "next/image";
import { Language } from "@/app/types";
import styles from './Qualifications.module.scss';

const url = process.env.NEXT_PUBLIC_URL || '';

const Qualifications = () => {
    const { currentLanguage, strings } = useLanguage();

    return (
        <div className={styles.qualifications}>
            <div className={styles.education}>
                <div className={styles.sectionTitle}>{strings.education}</div>
                <div className={styles.educationCard}>
                    <ul>
                        {educationData.map((i) => {
                            const education = currentLanguage === Language.ES ? i.es : i.en;
                            const isUrl = i.en.url?.includes('http');
                            const filePath = `${url}${i.en.url}.pdf`;
                            return (
                                <li key={i.id}>
                                    <div className={styles.degree}>
                                        {
                                            (i.en.title === "React" || i.en.content.toLowerCase().includes('az')) ?
                                                <a
                                                    title="View certification"
                                                    href={isUrl ? i.en.url : filePath}
                                                    target="_blank">
                                                    <div>{education.title} </div>
                                                </a>
                                                :
                                                <div>{education.title}</div>
                                        }
                                    </div>
                                    <p>{education.content}</p>
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