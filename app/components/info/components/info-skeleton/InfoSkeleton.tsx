import * as React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '@/app/components/info/Info.module.scss';


// const InfoSection = () => {
//     return Array.from({ length: 3 }).map((_, index) => (
//         <div key={index} className={styles.skeletonContainer}>
//             {Array.from({ length: 2 }).map((_, i) => (
//                 <div key={i} className={styles.contact}>
//                     <div className={styles.icon}>
//                         <Skeleton circle height={30} width={30} />
//                     </div>
//                     <Skeleton height={13} width={220} />
//                 </div>
//             ))}
//         </div>
//     ));
// };

const InfoSkeleton = () => {
    return (
        <div className={styles.infoGrid}>
            {/* <Skeleton circle height={160} width={160} /> */}

        </div>
    );
};

export default InfoSkeleton;