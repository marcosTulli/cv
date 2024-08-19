import React from 'react';
import styles from "./JobCard.module.scss";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const JobCardSkeleton: React.FC = () => {
    return (
        <div>
            <div className={styles.job}>
                <h3 className={styles.jobTitle}><Skeleton height={24} width={200} /></h3>
                <p className={styles.jobDetails}><Skeleton height={18} width={150} /></p>
                <ul className={styles.jobDescription}>
                    {
                        Array.from({ length: 10 }).map((_, i) => {
                            return (
                                <li key={i}><Skeleton height={10} width={400} /></li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>


    );
};

export default JobCardSkeleton;