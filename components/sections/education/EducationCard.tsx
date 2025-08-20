import * as React from 'react';
import styles from './Education.module.scss';
import { IEducation } from '@/models/interfaces';

interface IEducationCard {
  school: IEducation;
}

const EducationCard: React.FC<IEducationCard> = ({ school }) => {
  return (
    <div className={styles.education}>
      <div className={styles.educationContent}>
        <h3 className={styles.educationTitle}>{school.title}</h3>
        <p className={styles.educationDetails}>{school.content}</p>
      </div>
    </div>
  );
};

export default EducationCard;
