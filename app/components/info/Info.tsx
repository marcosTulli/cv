import React from 'react';
import { useLanguage } from "@/app/contexts/LanguageContext";
import Image from "next/image";
import { CopyAlert } from './CopyAlert';
import copy from "copy-to-clipboard";
import * as utils from "@/app/utils/index";
import { contactInfo } from '@/app/assets/contact-info';
import styles from './Info.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from '@/app/components/dropdown/Dropdown';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery } from '@mui/material';

interface HoverState {
    id: number,
    value: string,
    isHover: boolean;
    isCopied?: boolean;
}

const Info = () => {
    const { trans: strings } = useLanguage();
    const [hoverItem, setHoverItem] = React.useState<HoverState | undefined>();
    const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);
    const icons = utils.icons;
    const isMobile = useMediaQuery('(max-width: 500px)');


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

    const handleIcons = (iconName: string) => {
        const icons = {
            location: <LocationOnOutlinedIcon />,
            phone: <LocalPhoneOutlinedIcon />,
            email: <EmailOutlinedIcon />
        };

        switch (iconName) {
            case 'location':
                return icons.location;
            case 'phone':
                return icons.phone;
            case 'email':
                return icons.email;
            default:
                break;
        }
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
                    {
                        !isMobile &&
                        <div>
                            <button onClick={handleMenuClick}>
                                <MenuIcon />
                            </button>
                            {
                                displayMenu &&
                                <div className={styles.dropdown}
                                    onMouseLeave={() => setDisplayMenu(false)}
                                >
                                    <Dropdown />
                                </div>
                            }
                        </div>
                    }
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
                                    <p style={{ marginRight: '0.4rem', height: '20px' }}>
                                        {
                                            handleIcons(i.name)
                                        }
                                    </p>
                                    <p>{i.value}</p>
                                    <div className={styles.copyButtonContainer}>
                                        <button
                                            title='Copy to clipboard'
                                            hidden={displayCopyButton(i.id)}
                                            className={styles.copy}
                                            onClick={() => handleCopy(i.value, true)}>
                                            <ContentCopyIcon style={{ width: '20px', height: '20px' }} />
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
                                <LinkedInIcon
                                    style={{ marginRight: '0.4rem' }}

                                />
                                <p>{strings.linkedin}</p>
                            </a>
                            <a
                                href={strings.githubURL}
                                target="_blank"
                                title={strings.githubURL}
                            >
                                <GitHubIcon
                                    style={{ marginRight: '0.4rem' }}
                                    className={styles.TUKI}

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