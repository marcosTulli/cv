// TODO: Use eslint vscode extension
"use client";
import * as React from "react";
import Image from "next/image";
import JobCard from "@/app/components/JobCard";
import jobsData from "@/app/assets/jobs-data";
import skillsData from "@/app/assets/skills-data";
import educationData from "@/app/assets/education-data";
import { Language } from "@/app/types";
import { useLanguage } from "@/app/contexts/LanguageContext";

const icons = {
    width: 20,
    height: 20,
};

export default function Home() {
    const { lang, toggleLang, trans: strings, downloadFile } = useLanguage();
    const handleDownloadClick = () => {
        downloadFile().then((blob) => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]));
            const aTag = document.createElement("a");
            aTag.href = blobURL;
            aTag.setAttribute("download", `CV Marcos Tulli.pdf`);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        });
    };
    // TODO: Split into smaller components
    return (
        <div className="cvContainer">
            <div className="leftSection">
                <div className="about">
                    <h1 className="candidateName">{strings.candidateName}</h1>
                    <h3 className="qualifications">{strings.candidateTitle}</h3>
                    <p className="about">{strings.about}</p>
                </div>
                <div className="workExperience">
                    <div className="sectionTitle">{strings.workExperience}</div>
                    {jobsData.map((i) => {
                        return <JobCard key={i.id} data={i} language={lang} />;
                    })}
                </div>
            </div>
            <div className="rightSection">
                <div className="profile">
                    <div className="profilePicture">
                        <Image
                            src="/profile-picture.jpg"
                            alt="profile picture"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="contactInfo">
                        <ul>
                            <li>
                                <Image
                                    src="/location.png"
                                    alt="location-icon"
                                    width={icons.width}
                                    height={icons.height}
                                />
                                <p>{strings.location}</p>
                                <div>
                                    <p>EN</p> {/** TODO: This should be translated too */}
                                    <label title="Switch Language" className="switch">
                                        {" "}
                                        {/** TODO: This title should be translated too */}
                                        <input type="checkbox" onChange={() => toggleLang()} />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <p>SP</p> {/** TODO: This should be translated too */}
                            </li>
                            <li>
                                <Image
                                    src="/mail.png"
                                    alt="mail-icon"
                                    width={icons.width}
                                    height={icons.height}
                                />
                                <p>{strings.email}</p>
                            </li>

                            <li>
                                <Image
                                    src="/telephone.png"
                                    alt="phone-icon"
                                    width={icons.width}
                                    height={icons.height}
                                />
                                <p>{strings.phone}</p>
                            </li>

                            <li>
                                <div>
                                    <Image
                                        src="/uk.png"
                                        alt="english"
                                        width={icons.width}
                                        height={icons.height}
                                    />
                                    <p>{strings.english}</p>
                                    <Image
                                        src="/spain.png"
                                        alt="spanish"
                                        width={icons.width}
                                        height={icons.height}
                                    />
                                    <p>{strings.spanish}</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a
                                        href={strings.linkedinURL}
                                        target="_blank"
                                        title={strings.linkedinURL}
                                    >
                                        <Image
                                            src="/linkedin.png"
                                            alt="linkedin"
                                            width={icons.width}
                                            height={icons.height}
                                        />
                                        <p>{strings.linkedin}</p>
                                    </a>
                                    <a
                                        href={strings.githubURL}
                                        target="_blank"
                                        title={strings.githubURL}
                                    >
                                        <p>{strings.github}</p>
                                    </a>
                                    <button
                                        className="download"
                                        title="download"
                                        onClick={handleDownloadClick}
                                    >
                                        <Image
                                            src="/download.png"
                                            alt="download"
                                            width={40}
                                            height={40}
                                        />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
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
                </div>
            </div>
        </div>
    );
}