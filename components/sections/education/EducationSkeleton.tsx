import * as React from 'react';
import styles from './Education.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const EducationSkeleton: React.FC = () => {
  return (
    <div className={styles.education}>
      <div className={styles.educationContent}>
        <h3 className={styles.educationTitle}>
          <Skeleton width="70%" height={15} />
        </h3>
        <p className={styles.educationDetails}>
          <Skeleton width="40%" height={15} />
        </p>
      </div>
    </div>
  );
};

export default EducationSkeleton;
