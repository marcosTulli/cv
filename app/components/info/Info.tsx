'use client';
import React from 'react';
import Image from "next/image";
import styles from './Info.module.scss';
import Social from './components/social/Social';
import Contact from './components/contact/Contact';
import Languages from './components/languages/Languages';

const Info: React.FC = () => {
    return (
        <div className={styles.info}>
            <Image
                src="/profile.png"
                alt="profile picture"
                width={500}
                className={styles.profilePicture} height={500}
            />
            <Languages />
            <Contact />
            <Social />
        </div>
    );
};

export default Info;