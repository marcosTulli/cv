import React from 'react';
import styles from "./WorkExperience.module.scss";
import WorkExperienceBody from './WorkExperienceBody';
import SectionHeader from '../section-header/SectionHeader';
import { useLanguage } from '@/app/hooks';
import { sectionRefStore } from '@/app/store';

const WorkExperience: React.FC = () => {
    const { setSection } = sectionRefStore();
    const { strings } = useLanguage();
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        setSection('WorkExperience', sectionRef.current);
        return () => { setSection('WorkExperience', null); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <section ref={sectionRef} className={styles.section}>
            <SectionHeader title={strings.workExperience} description={strings.workExperienceDescription} />
            <WorkExperienceBody />
        </section>

    );
};

export default WorkExperience;

