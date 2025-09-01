import React from 'react';
import { Typography } from '@mui/material';
import styles from '../SinglePageTemplate.module.scss';
import { userStore } from '@/store';

const Header: React.FC = () => {
  const { user } = userStore();
  return (
    <header className={styles.headerSection} role="banner">
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <Typography component="h1" className={styles.name}>{user.name}</Typography>
          <Typography component="h2" className={styles.title}>
            {user.info.candidateTitle}
          </Typography>
        </div>
        <address className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email:</span>
            <span>{user.email}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>WhatsApp:</span>
            <span>{user.phone}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>LinkedIn:</span>
            <span>{user.network.linkedin.url}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>GitHub:</span>
            <span>{user.network.github.url}</span>
          </div>
        </address>
      </div>
    </header>
  );
};

export default Header;
