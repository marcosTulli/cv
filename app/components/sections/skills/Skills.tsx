import React from 'react';
import styles from './Skills.module.scss';
import SkillsBody from './SkillsBody';
import { useLanguage } from '@/app/hooks';
import SectionHeader from '../section-header/SectionHeader';
import { sectionRefStore } from '@/app/store';

const Skills: React.FC = () => {
    const { strings } = useLanguage();
    const { setSection } = sectionRefStore();
    const sectionRef = React.useRef(null);



    React.useEffect(() => {
        setSection('Skills', sectionRef.current);
        return () => { setSection('Skills', null); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section ref={sectionRef} className={styles.container}>
            <SectionHeader
                title={strings.skills}
                description={strings.skillsDescription}
            />
            <SkillsBody />
        </section>
    );
};

export default Skills;