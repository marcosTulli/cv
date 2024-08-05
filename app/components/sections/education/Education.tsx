import React from 'react';
import styles from './Education.module.scss';
import EducationBody from './EducationBody';
import SectionHeader from '../section-header/SectionHeader';
import { useLanguage } from '@/app/hooks';
import { sectionRefStore } from '@/app/store';

const Education: React.FC = () => {

    const { strings } = useLanguage();
    const { setSection } = sectionRefStore();
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        setSection('Education', sectionRef.current);
        return () => { setSection('Education', null); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <SectionHeader title={strings.education} description={strings.educationDescription} />
            <EducationBody />
        </section>
    );
};

export default Education;