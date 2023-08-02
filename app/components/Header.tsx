import React from 'react';
import Image from "next/image";
import * as utils from "@/app/utils/index";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { Language } from '../types';


const Header: React.FC = () => {
    const { lang, toggleLang, trans: strings } = useLanguage();
    const fileName = `${strings.cv}${lang}`;
    const icons = utils.icons;
    const handleDownloadClick = () => {
        utils.downloadFile('http://localhost:3000/', fileName);
    };

    return (
        <div className='headerContainer'>
            <div className="about">
                <h1 className="candidateName">{strings.candidateName}</h1>
                <h3 className="qualifications">{strings.candidateTitle}</h3>
                <p className="about">{strings.about}</p>
            </div>
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
                                <p>{strings.en}</p>
                                <label title="Switch Language" className="switch">
                                    <input type="checkbox" onChange={() => toggleLang()} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <p>{strings.es}</p>
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


        </div>
    );
};

export default Header;