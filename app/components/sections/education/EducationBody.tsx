import * as React from 'react';
import styles from './Education.module.scss';
import { IEducation } from '@/app/models/interfaces';
import EducationCard from './EducationCard';
import EducationSkeleton from './EducationSkeleton';

interface IEdcuationBody {
    data?: IEducation[],
    isLoading: boolean;
}
const EducationBody: React.FC<IEdcuationBody> = ({ data, isLoading }) => {

    return (
        <div className={styles.gridContainer}>
            <div className={styles.educationGrid}>
                {
                    isLoading
                        ? Array.from({ length: 6 })?.map((_, i) => (< EducationSkeleton key={i} />))
                        : data?.map((school) => (
                            <EducationCard key={school.id} school={school} />
                        ))
                }
            </div>
        </div>
    );
};

export default EducationBody;
