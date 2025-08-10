'use client';
import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Box } from '@mui/material';

interface IProfilePictureProps {
  isLoading: boolean;
}

const ProfilePicture: React.FC<IProfilePictureProps> = ({ isLoading }) => {
  const size = 160;
  return isLoading ? (
    <Box className={styles.profilePicture}>
      <Skeleton circle height={158.13} width={158.13} />
    </Box>
  ) : (
    <Image
      src="/profile.png"
      alt="profile picture"
      width={size}
      height={size}
      className={styles.profilePicture}
    />
  );
};

export default ProfilePicture;
