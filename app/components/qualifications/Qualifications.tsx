import React from 'react';
import educationData from "@/app/assets/education-data";
import skillsData from "@/app/assets/skills-data";
import { useLanguage } from "@/app/contexts/LanguageContext";
import Image from "next/image";
import { Language } from "@/app/types";
import styles from './Qualifications.module.scss';

const Qualifications = () => {
    const { lang, trans: strings } = useLanguage();

    return (
        <div className={styles.qualifications}>
            <div className={styles.education}>
                <div className={styles.sectionTitle}>{strings.education}</div>
                <div className={styles.educationCard}>
                    <ul>
                        {educationData.map((i) => {
                            const education = lang === Language.ES ? i.es : i.en;
                            return (
                                <li key={i.id}>
                                    <div className={styles.degree}>{education.title}</div>
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
        </div>

    );
};

export default Qualifications;