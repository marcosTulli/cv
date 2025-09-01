import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../SinglePageTemplate.module.scss';
import { useSkills } from '@/hooks/queries';
import { languageStore, userStore } from '@/store';

const Skills: React.FC = () => {
  const { user } = userStore();
  const { data } = useSkills({ id: user._id });
  const { strings } = languageStore();
  return (
    <Box className={styles.skillsContainer}>
      <Typography className={styles.sectionTitle}>{strings.skills}</Typography>
      <Box component="ul" className={styles.skills}>
        {data?.map((skill) => (
          <Box component="li" key={skill._id} className={styles.skill}>
            {skill.formattedName}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
