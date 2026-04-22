'use client';
import React from 'react';
import styles from './index.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { userStore } from '@/store';
import { Box } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import EditButton from '@/components/edit-button';
import { useAuth, useUi } from '@/hooks';
import { NetworkName } from '@/models/interfaces';

interface ISocialProps {
  isLoading: boolean;
}

const itemSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
};

const Social: React.FC<ISocialProps> = ({ isLoading }) => {
  const { user } = userStore();
  const { openEdit, isEditMode } = useUi();
  const { isAdmin } = useAuth();
  const showEdit = isEditMode && isAdmin;

  const handleEdit = (name: NetworkName) => {
    const entry = user.network[name];
    openEdit({
      type: 'network',
      name,
      display: entry.display,
      url: entry.url,
    });
  };

  return isLoading ? (
    <Box className={styles.socialContainer}>
      <Box className={styles.socialItem}>
        <Skeleton className={styles.icon} height={24} width={24} circle />
        <Skeleton height={16} width={100} />
      </Box>
      <Box className={styles.socialItem}>
        <Skeleton className={styles.icon} height={24} width={24} circle />
        <Skeleton height={16} width={90} />
      </Box>
    </Box>
  ) : (
    <Box sx={{ color: 'secondary.main' }} className={styles.socialContainer}>
      <Box className={styles.socialItem} sx={itemSx}>
        <Box
          component={'a'}
          sx={{ color: 'secondary.main' }}
          className={styles.socialLink}
          href={user.network.linkedin.url}
          target="_blank"
          title={user.network.linkedin.url}
        >
          <LinkedInIcon className={styles.icon} />
          <p>{user.network.linkedin.display}</p>
        </Box>
        {showEdit && <EditButton onClick={() => handleEdit('linkedin')} />}
      </Box>
      <Box className={styles.socialItem} sx={itemSx}>
        <Box
          component={'a'}
          sx={{ color: 'secondary.main' }}
          className={styles.socialLink}
          href={user.network.github.url}
          target="_blank"
          title={user.network.github.url}
        >
          <GitHubIcon className={styles.icon} />
          <p>{user.network.github.display}</p>
        </Box>
        {showEdit && <EditButton onClick={() => handleEdit('github')} />}
      </Box>
    </Box>
  );
};

export default Social;
