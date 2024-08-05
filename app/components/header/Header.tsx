import React from 'react';
import styles from './Header.module.scss';
import { sectionRefStore, userStore } from '@/app/store';
import SectionHeader from '../sections/section-header/SectionHeader';
import NavBar from '../nav-bar/NavBar';

const Header: React.FC = () => {
    const { user } = userStore();
    const { setSection } = sectionRefStore();
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        setSection('Header', sectionRef.current);
        return () => { setSection('Header', null); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section ref={sectionRef} className={styles.headerContainer} >
            <NavBar />
            <SectionHeader
                title={user.name}
                description={user.info.candidateTitle}
                pageHeader
            />
        </section >
    );
};

export default Header;