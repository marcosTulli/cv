import React from 'react';
import JobCard from './job-card/JobCard';
import styles from './WorkExperience.module.scss';
import { useWorkExperience } from '@/app/hooks/queries';
import { languageStore, userStore } from '@/app/store';
import { IExperience } from '@/app/models/interfaces';
import { useIsLoadingSections } from '@/app/hooks';
import { LoadableSections } from '@/app/models/enums';

const WorkExperienceBody = () => {
    const { currentLanguage } = languageStore();
    const { user } = userStore();
    const { data, isLoading: isLoadingWorkExperience } = useWorkExperience({ id: user._id, lang: currentLanguage });
    const experiences: IExperience[] = data ? data.experiences : [{ _id: '', activePeriod: '', comapnyUrl: '', companyLogo: '', companyName: '', info: { position: '', tasks: [{ _id: '', task: '' }] } }];
    const { handleLoad } = useIsLoadingSections();

    React.useEffect(() => {
        handleLoad({
            sectionName: LoadableSections.isLoadingWorkExperience,
            isLoading: isLoadingWorkExperience
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoadingWorkExperience]);

    return (
        <div className={`${styles.flexGrid} py-12 ${styles.gridTwoCols}`}>
            <div className={styles.flexColumn}>
                {experiences.map((experience) => {
                    return (
                        <JobCard key={experience._id} experience={experience} language={currentLanguage} />
                    );
                })}
            </div>
        </div>
    );
};

export default WorkExperienceBody;