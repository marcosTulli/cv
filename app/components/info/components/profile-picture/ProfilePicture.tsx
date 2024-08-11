import React from 'react';
import Image from "next/image";
import styles from './ProfilePicture.module.scss';

const ProfilePicture: React.FC = () => {
    return (
        <Image
            src="/profile.png"
            alt="profile picture"
            width={100}
            height={100}
            className={styles.profilePicture}
        />
    );
};

export default ProfilePicture;