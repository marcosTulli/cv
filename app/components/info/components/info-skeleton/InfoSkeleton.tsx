import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './InfoSkeleton.module.scss';


const InfoSection = () => {
    return Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className={styles.skeletonContainer}>
            {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className={styles.contact}>
                    <div className={styles.icon}>
                        <Skeleton circle height={30} width={30} />
                    </div>
                    <Skeleton height={18} width={76} />
                </div>
            ))}
        </div>
    ));
};

const InfoSkeleton = () => {
    return (
        <div className={styles.infoGrid}>
            <Skeleton circle height={144} width={144} />
            {
                <InfoSection />
            }

        </div>
    );
};

export default InfoSkeleton;