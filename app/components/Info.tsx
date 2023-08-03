import React from 'react';
import { useLanguage } from "@/app/contexts/LanguageContext";
import Image from "next/image";
import { CopyAlert } from './CopyAlert';
import copy from "copy-to-clipboard";
import * as utils from "@/app/utils/index";
import { contactInfo } from '@/app/assets/contact-info';

interface HoverState {
    id: number,
    value: string,
    isHover: boolean;
    isCopied?: boolean;
}

const Info = () => {
    const { lang, toggleLang, trans: strings } = useLanguage();
    const [hoverItem, setHoverItem] = React.useState<HoverState | undefined>();
    const icons = utils.icons;
    const fileName = `${strings.cv}${lang}`;

    const displayCopyButton = (id: number): boolean => {
        if (hoverItem?.isHover && id === hoverItem.id) {
            return false;
        }
        else {
            return true;
        }
    };

    const displayCopyConfirmation = (id: number): boolean => {
        if (hoverItem?.isCopied && id === hoverItem.id) {
            return false;
        }
        else {
            return true;
        }
    };

    const handleDownloadClick = () => {
        utils.downloadFile('http://localhost:3000/', fileName);
    };

    const handleTextHover = (id: number, value: string, isHover: boolean) => {
        if (value !== strings.location) {
            setHoverItem({ id, value, isHover });
        }

    };

    const handleCopy = (value: string, isCopied: boolean) => {
        copy(value);
        setHoverItem((i) => i ? { ...i, isCopied } : i);
    };


    React.useEffect(() => {
        if (hoverItem?.isCopied && !hoverItem.isHover) {
            setTimeout(() => {
                setHoverItem(undefined);
            }, 800);
        }

    }, [hoverItem]);

    return (
        <div className="info">
            <div className='infoHeader'>
                <div className="profilePicture">
                    <Image
                        src="/profile-picture.jpg"
                        alt="profile picture"
                        width={300}
                        height={300}
                    />
                </div>
                <div className='actions'>
                    <div className='toggleLanguage'>
                        <p>{strings.en}</p>
                        <label title="Switch Language" className="switch">
                            <input type="checkbox" onChange={() => toggleLang()} />
                            <span className="slider round"></span>
                        </label>
                        <p>{strings.es}</p>
                    </div>

                    <button
                        className="download"
                        title="download"
                        onClick={handleDownloadClick}
                    >
                        <Image
                            src="/download.png"
                            alt="download"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>

            </div>
            <div className="contactInfo">
                <ul>
                    {
                        contactInfo.map(i => {
                            return (
                                <li
                                    onMouseEnter={() => handleTextHover(i.id, i.value, true)}
                                    onMouseLeave={() => handleTextHover(i.id, i.value, false)}
                                    key={i.id}
                                >
                                    <Image
                                        src={i.src}
                                        alt={i.name}
                                        width={icons.width}
                                        height={icons.height}
                                    />
                                    <p>{i.value}</p>
                                    <div className='copyButtonContainer'>
                                        <button
                                            title='Copy to clipboard'
                                            hidden={displayCopyButton(i.id)}
                                            className='copy'
                                            onClick={() => handleCopy(i.value, true)}>
                                            <Image
                                                src="/copy.png"
                                                alt="mail-icon"
                                                width={icons.width}
                                                height={icons.height}
                                            />
                                        </button>
                                        <p
                                            hidden={displayCopyConfirmation(i.id)}
                                        >
                                            <CopyAlert
                                                display={displayCopyButton(i.id)}
                                                string={i.value}
                                            />
                                        </p>
                                    </div>
                                </li>
                            );
                        })
                    }

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
                        <span className='links'>
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
                                <Image
                                    className='githubIcon'
                                    src="/github.png"
                                    alt="linkedin"
                                    width={35}
                                    height={20}
                                />
                                <p>{strings.github}</p>
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Info;