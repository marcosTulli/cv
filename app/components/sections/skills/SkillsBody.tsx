import React from 'react';
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import { userStore } from '@/app/store';
import { useSkills } from '@/app/hooks/queries';
import { ISkills } from '@/app/models/interfaces';
import { useIsLoadingSections } from '@/app/hooks';
import { LoadableSections } from '@/app/models/enums';

const SkillsBody = () => {
    const { user } = userStore();
    const { data: skillsData, isLoading: isLoadingSkills } = useSkills({ id: user._id });
    const { handleLoad } = useIsLoadingSections();

    React.useEffect(() => {
        handleLoad({
            sectionName: LoadableSections.isLoadingSkills,
            isLoading: isLoadingSkills
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoadingSkills]);

    return (

        <div className={styles.skillsGridContainer}>
            <div className={styles.skillGrid}>
                {skillsData?.skills?.map((skill: ISkills) => {
                    return (
                        <div key={skill._id} className={styles.skill}>
                            <Skill skill={skill} />
                        </div>

                    );
                })}
            </div>
        </div>
    );
};

export default SkillsBody;