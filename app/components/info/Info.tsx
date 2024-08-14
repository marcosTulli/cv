'use client';
import React from 'react';
import styles from './Info.module.scss';
import Social from './components/social/Social';
import Contact from './components/contact/Contact';
import Languages from './components/languages/Languages';
import ProfilePicture from './components/profile-picture/ProfilePicture';

const Info: React.FC = () => {
    return (

        <div className={styles.info}>
            <div className={styles.infoGrid}>
                <ProfilePicture />
                <Contact />
                <Social />
                <Languages />
            </div>
        </div>
    );
};

export default Info;