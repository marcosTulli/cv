import React from 'react';
import educationData from "@/app/assets/education-data";
import skillsData from "@/app/assets/skills-data";
import { useLanguage } from "@/app/contexts/LanguageContext";
import Image from "next/image";
import { Language } from "@/app/types";

const Qualifications = () => {
    const { lang, trans: strings } = useLanguage();

    return (
        <div className='qualifications'>
            <div className="education">
                <div className="sectionTitle">{strings.education}</div>
                <div className="educationCard">
                    <ul>
                        {educationData.map((i) => {
                            const education = lang === Language.ES ? i.es : i.en;
                            return (
                                <li key={i.id}>
                                    <div className="degree">{education.title}</div>
                                    <p>{education.content}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className="skills">
                <div className="sectionTitle">{strings.skills}</div>
                <div className="skillsCard">
                    {skillsData.map((i) => {
                        return (
                            <div className='skill'>
                                <Image src={i.url} alt={i.name} width={20} height={20} />
                                {<p>{i.name}</p>}
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* <div className="skills">
                <div className="sectionTitle">{strings.skills}</div>
                <div className="skillsCard">
                    <ul>
                        {skillsData.map((i) => {
                            return (
                                <li key={i.id}>
                                    <div>
                                        <Image src={i.url} alt={i.name} width={20} height={20} />
                                        {<p>{i.name}</p>}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div> */}
        </div>

    );
};

export default Qualifications;