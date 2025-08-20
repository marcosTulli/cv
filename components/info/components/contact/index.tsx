'use client';
import * as React from 'react';
import styles from './index.module.scss';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { userStore } from '@/store';
import { Box, Tooltip } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useContact } from '../../hooks';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface IContactProps {
  isLoading: boolean;
}
const Contact: React.FC<IContactProps> = ({ isLoading }) => {
  const { user } = userStore();
  const { tooltipTitle, handleCopy, resetTooltip } = useContact();

  return (
    <Box
      sx={{ color: 'secondary.main' }}
      className={styles.contactInfoContainer}
    >
      {isLoading ? (
        <Box>
          <Box className={styles.contact}>
            <Skeleton className={styles.icon} height={24} width={24} />
            <Skeleton height={14} width={150} />
          </Box>
          <Box className={styles.contact}>
            <Skeleton className={styles.icon} height={24} width={24} />
            <Skeleton height={14} width={220} />
          </Box>
        </Box>
      ) : (
        <Box>
          <Tooltip title={tooltipTitle} TransitionProps={{ timeout: 500 }}>
            <Box
              onClick={handleCopy}
              onMouseOut={resetTooltip}
              className={styles.contact}
            >
              <WhatsAppIcon className={styles.icon} />
              <Box>{user.phone}</Box>
            </Box>
          </Tooltip>
          <Tooltip title={tooltipTitle} TransitionProps={{ timeout: 500 }}>
            <Box
              className={styles.contact}
              onClick={handleCopy}
              onMouseOut={resetTooltip}
            >
              <EmailOutlinedIcon className={styles.icon} />
              <Box>{user.email}</Box>
            </Box>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

export default Contact;
