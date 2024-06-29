import React from 'react';
import styles from './Header.module.scss';
import { useMediaQuery } from '@mui/material';
import Info from '../info/Info';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from '@/app/components/dropdown/Dropdown';
import { userStore } from '@/app/store';
import LanguageSelector from '../language-selector/LanguageSelector';


const Header: React.FC = () => {
    const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);
    const isMobile = useMediaQuery('(max-width: 500px)');
    const { user } = userStore();

    const handleMenuClick = () => {
        setDisplayMenu(!displayMenu);
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.about}>
                <div className={styles.headerTitle}>
                    <h1 className={styles.candidateName}>{user.name}</h1>
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
                                    <LanguageSelector />
                                    <Dropdown handleClose={handleMenuClick} />
                                </div>
                            }
                        </div>
                    }

                </div>
                <h3 className={styles.candidateTitle}>{user.info.candidateTitle}</h3>
                <p className={styles.aboutText}>{user.info.about}</p>
                {isMobile && <Info />}
            </div>
        </div>
    );
};

export default Header;