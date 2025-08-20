import * as React from 'react';
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import { ISkills } from '@/models/interfaces';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Grid } from '@mui/material';

interface ISkillsBody {
  skillsData?: ISkills[];
  isLoading: boolean;
}

const SkillsBody: React.FC<ISkillsBody> = ({ skillsData, isLoading }) => {
  return (
    <Grid
      container
      maxWidth="lg"
      sx={{ color: 'secondary.main' }}
      className={styles.skillsGridContainer}
    >
      <div className={styles.skillGrid}>
        {isLoading
          ? Array.from({ length: 30 }).map((_, index) => (
              <div key={index} className={styles.skill}>
                <Skeleton height={20} width={30} />
                <Skeleton height={10} width={100} />
              </div>
            ))
          : skillsData?.map((skill: ISkills) => (
              <div key={skill._id} className={styles.skill}>
                <Skill skill={skill} />
              </div>
            ))}
      </div>
    </Grid>
  );
};

export default SkillsBody;
