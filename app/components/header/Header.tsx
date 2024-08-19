import React from 'react';
import styles from './Header.module.scss';
import { userStore } from '@/app/store';
import SectionHeader from '../sections/section-header/SectionHeader';
import NavBar from '../nav-bar/NavBar';
import { Sections } from '@/app/models/enums';
import useSectionRef from '../sections/hooks/useSectionRef';
import { useIsLoadingSections } from '@/app/hooks';

const Header: React.FC = () => {
    const { user, isLoadingUser } = userStore();
    const { sectionRef } = useSectionRef({ sectionName: Sections.Header });
    const { isLoadingSections } = useIsLoadingSections();


    return (
        <section
            ref={sectionRef}
            className={styles.headerContainer}
        >
            <NavBar />
            <SectionHeader
                title={user.name}
                description={user.info.candidateTitle}
                isLoading={isLoadingUser || isLoadingSections}
                pageHeader
            />
        </section >
    );
};

export default Header;