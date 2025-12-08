import * as React from 'react';
import styles from './Education.module.scss';
import { IEducation } from '@/models/interfaces';
import EducationCard from './EducationCard';
import EducationSkeleton from './EducationSkeleton';
import { Grid } from '@mui/material';

interface IEdcuationBody {
  data?: IEducation[];
  isLoading: boolean;
}
const EducationBody: React.FC<IEdcuationBody> = ({ data, isLoading }) => {
  return (
    <Grid
      container
      maxWidth="lg"
      spacing={1.5}
      sx={{ color: 'secondary.main' }}
      className={styles.gridContainer}
    >
      <div className={styles.educationGrid}>
        {isLoading
          ? Array.from({ length: 4 })?.map((_, i) => <EducationSkeleton key={i} />)
          : data?.map((school) => <EducationCard key={school.id} school={school} />)}
      </div>
    </Grid>
  );
};

export default EducationBody;
