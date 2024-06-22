import React from 'react';
// import { useLanguage } from "@/app/contexts/LanguageContext";
import { useLanguage } from '@/app/hooks';
import styles from './Header.module.scss';
import { useMediaQuery } from '@mui/material';
import Info from '../info/Info';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from '@/app/components/dropdown/Dropdown';

const Header: React.FC = () => {
    const { trans: strings } = useLanguage();
    const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);
    const isMobile = useMediaQuery('(max-width: 500px)');

    const handleMenuClick = () => {
        setDisplayMenu(!displayMenu);
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.about}>
                <div className={styles.headerTitle}>
                    <h1 className={styles.candidateName}>{strings.candidateName}</h1>
                    {
                        isMobile &&
                        <div>
                            <button onClick={handleMenuClick}>
                                <MenuIcon />
                            </button>
                            {
                                displayMenu &&
                                <div className={styles.dropdown}
                                    onMouseLeave={() => setDisplayMenu(false)}
                                >
                                    <Dropdown handleClose={handleMenuClick} />
                                </div>
                            }
                        </div>
                    }

                </div>
                <h3 className={styles.candidateTitle}>{strings.candidateTitle}</h3>
                <p className={styles.aboutText}>{strings.about}</p>
                {isMobile && <Info />}
            </div>
        </div>
    );
};

export default Header;