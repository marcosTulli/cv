import React from 'react';
import styles from './Header.module.scss';
import { useMediaQuery, Skeleton } from '@mui/material';
import Info from '../info/Info';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from '@/app/components/dropdown/Dropdown';
import { userStore } from '@/app/store';
import LanguageSelector from '../language-selector/LanguageSelector';


const Header: React.FC = () => {
    const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);
    const isMobile = useMediaQuery('(max-width: 500px)');
    const { user, isLoadingUser } = userStore();

    const handleMenuClick = () => {
        setDisplayMenu(!displayMenu);
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.about}>
                <div className={styles.headerTitle}>
                    {
                        !isLoadingUser
                            ?
                            <h1 className={styles.candidateName}>{user.name}</h1>
                            : <Skeleton className={styles.candidateName} variant="rectangular" style={{ borderRadius: '1rem', marginBottom: '2rem' }} width={310} height={40} />
                    }
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
                {
                    !isLoadingUser
                        ? <h3 className={styles.candidateTitle}>{user.info.candidateTitle}</h3>
                        : <Skeleton className={styles.candidateTitle} variant="rectangular" style={{ borderRadius: '1rem', marginBottom: '1rem' }} width={210} height={20} />

                }
                {!isLoadingUser
                    ? <p className={styles.aboutText}>{user.info.about}</p>
                    : [...Array(4)].map(i => {
                        return (
                            <Skeleton variant="rectangular" style={{ borderRadius: '1rem', marginTop: '0.5rem' }} width={310} height={10} />
                        );
                    })

                }
                {isMobile && <Info />}
            </div>
        </div>
    );
};

export default Header;