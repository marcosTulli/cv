import React from 'react';
import Image from "next/image";
import styles from './ProfilePicture.module.scss';

const ProfilePicture: React.FC = () => {
    return (
        <Image
            src="/profile.png"
            alt="profile picture"
            width={500}
            height={500}
            className={styles.profilePicture}
        />
    );
};

export default ProfilePicture;