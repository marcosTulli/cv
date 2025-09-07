import React from 'react';
import { Typography } from '@mui/material';
import styles from '../SinglePageTemplate.module.scss';
import { useSkills } from '@/hooks/queries';
import { languageStore, userStore } from '@/store';

const Skills: React.FC = () => {
  const { user } = userStore();
  const { data } = useSkills({ id: user._id });
  const { strings } = languageStore();
  return (
    <section className={styles.section} aria-label="Skills">
      <Typography component="h2" className={styles.sectionTitle}>
        {strings.skills}
      </Typography>
      <div className={styles.skillsGrid}>
        {data?.map((skill) => (
          <span key={skill._id} className={styles.skillBadge}>
            {skill.formattedName}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
