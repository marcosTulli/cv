import * as React from 'react';
import styles from './Education.module.scss';
import { IEducation } from '@/app/models/interfaces';

interface IEdcuationBody {
    data?: IEducation[],
}
const EducationBody: React.FC<IEdcuationBody> = ({ data }) => {

    return (
        <div className={styles.gridContainer}>
            <div className={styles.educationGrid}>
                {data?.map((school) => (
                    <div
                        key={school.id}
                        className={styles.education}
                    >
                        <div className={styles.educationContent}>
                            <h3 className={styles.educationTitle}>{school.title}</h3>
                            <p className={styles.educationDetails}>{school.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationBody;
