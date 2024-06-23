import React from 'react';
import { useLanguage } from '@/app/hooks';
import styles from './Header.module.scss';
import { useMediaQuery } from '@mui/material';
import Info from '../info/Info';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from '@/app/components/dropdown/Dropdown';
import { userStore } from '@/app/store';

const Header: React.FC = () => {
    const { currentLanguage } = useLanguage();
    const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);
    const isMobile = useMediaQuery('(max-width: 500px)');
    const { user } = userStore();
    const info = user.info;
    const data = ({ ...info[currentLanguage] });

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
                                    <Dropdown handleClose={handleMenuClick} />
                                </div>
                            }
                        </div>
                    }

                </div>
                <h3 className={styles.candidateTitle}>{data.candidateTitle}</h3>
                <p className={styles.aboutText}>{data.about}</p>
                {isMobile && <Info />}
            </div>
        </div>
    );
};

export default Header;