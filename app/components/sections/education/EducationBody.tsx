import React from 'react';
import { useIsLoadingSections } from '@/app/hooks';
import { useEducation } from '@/app/hooks/queries';
import { languageStore, userStore } from '@/app/store';
import styles from './Education.module.scss';
import { LoadableSections } from '@/app/models/enums';

const EducationBody = () => {
    const { user } = userStore();
    const { currentLanguage } = languageStore();
    const { data: education, isLoading: isLoadingEducation } = useEducation({ id: user._id, lang: currentLanguage });
    const { handleLoad } = useIsLoadingSections();

    React.useEffect(() => {
        handleLoad({
            sectionName: LoadableSections.isLoadingEducation,
            isLoading: isLoadingEducation
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoadingEducation]);

    return (
        <div className={styles.gridContainer}>
            <div className={styles.educationGrid}>
                {education?.map((school) => (
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
