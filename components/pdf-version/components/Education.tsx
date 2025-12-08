import React from 'react';
import { Typography } from '@mui/material';
import styles from '../SinglePageTemplate.module.scss';
import { useEducation } from '@/hooks/queries';
import { languageStore, userStore } from '@/store';

const Education: React.FC = () => {
  const { strings, currentLanguage } = languageStore();
  const { user } = userStore();
  const { data: educationData } = useEducation({
    id: user._id,
    lang: currentLanguage,
  });

  return (
    <section className={styles.section} aria-label="Education">
      <Typography component="h2" className={styles.sectionTitle}>
        {strings.education}
      </Typography>
      <div className={styles.educationList}>
        {educationData?.map((education) => (
          <div className={styles.educationItem} key={education.id}>
            <Typography className={styles.degree}>{education.title}</Typography>
            <Typography className={styles.institution}>{education.content}</Typography>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
