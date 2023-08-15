import React from 'react';
import { useLanguage } from "@/app/contexts/LanguageContext";
import Image from "next/image";
import { CopyAlert } from './CopyAlert';
import copy from "copy-to-clipboard";
import * as utils from "@/app/utils/index";
import { contactInfo } from '@/app/assets/contact-info';
import styles from './Info.module.scss';
import Toggle from '../toggle/Toggle';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from '@/app/components/dropdown/Dropdown';
import { displayPartsToString } from 'typescript';



interface HoverState {
    id: number,
    value: string,
    isHover: boolean;
    isCopied?: boolean;
}
const url = process.env.NEXT_PUBLIC_URL || '';

const Info = () => {
    const { lang, toggleLang, trans: strings } = useLanguage();
    const [hoverItem, setHoverItem] = React.useState<HoverState | undefined>();
    const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);
    const icons = utils.icons;
    const fileName = `${strings.cv}${lang}`;
    const filePath = `${url}${fileName}.pdf`;

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

    const handleTextHover = (id: number, value: string, isHover: boolean) => {
        if (value !== strings.location) {
            setHoverItem({ id, value, isHover });
        }

    };

    const handleCopy = (value: string, isCopied: boolean) => {
        copy(value);
        setHoverItem((i) => i ? { ...i, isCopied } : i);
    };

    const handleMenuClick = () => {
        setDisplayMenu(!displayMenu);
    };

    return (
        <div className={styles.info}>
            <div className={styles.infoHeader}>
                <div className={styles.profilePicture}>
                    <Image
                        src="/profile-picture.jpeg"
                        alt="profile picture"
                        width={300}
                        height={300}
                    />
                </div>
                <div className={styles.actions}>
                    <div>
                        <button onClick={handleMenuClick}>
                            <MenuIcon />
                        </button>
                        {
                            displayMenu &&
                            <div className={styles.dropdown}
                                onMouseLeave={() => setDisplayMenu(false)}>
                                <Dropdown />
                            </div>
                        }
                    </div>
                    {/* // <Toggle
                    //     leftSideString={strings.en}
                    //     rightSideString={strings.es}
                    //     toggleFunc={toggleLang}
                    // />
                    // <span style={{ display: 'flex', gap: '1rem' }}>
                    //     <a
                    //         title='Download'
                    //         className={styles.download}
                    //         href={filePath}
                    //         // download={fileName}
                    //         target="_blank"
                    //     >
                    //         <Image
                    //             src="/download.png"
                    //             alt="download"
                    //             width={20}
                    //             height={20}
                    //         />
                    //     </a>
                    //     <Image
                    //         onMouseEnter={() => handleTextHover(0, strings.projectRepo, true)}
                    //         onMouseLeave={() => handleTextHover(0, strings.projectRepo, false)}
                    //         style={{ cursor: 'pointer' }}
                    //         onClick={() => handleCopy(strings.projectRepo, true)}
                    //         title='Clone this project!'
                    //         src="/clone.png"
                    //         alt="clone"
                    //         width={20}
                    //         height={20}
                    //     />
                    //     <p
                    //         style={{ margin: '0' }}
                    //         hidden={displayCopyConfirmation(0)}
                    //     >
                    //         <CopyAlert
                    //             display={displayCopyConfirmation(0)}
                    //             string={""}
                    //         />
                    //     </p>
                    // </span> */}
                </div>
            </div>
            <div className={styles.contactInfo}>
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
                                    <div className={styles.copyButtonContainer}>
                                        <button
                                            title='Copy to clipboard'
                                            hidden={displayCopyButton(i.id)}
                                            className={styles.copy}
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
                                                display={displayCopyConfirmation(i.id)}
                                                string={i.value}
                                            />
                                        </p>
                                    </div>
                                </li>
                            );
                        })
                    }

                    <li>
                        <div className={styles.languageContainer}>
                            <a
                                title="View certification"
                                href={strings.englishCertificate}
                                target='_blank'
                            >
                                <Image
                                    src="/uk.png"
                                    alt="english"
                                    width={icons.width}
                                    height={icons.height}

                                />
                                <p>{strings.english}</p>
                            </a>
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
                        <span className={styles.links}>
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
                                    className={styles.githubIcon}
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