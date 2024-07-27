import React from 'react';
import styles from './Education.module.scss';
import EducationHeader from './EducationHeader';
import EducationBody from './EducationBody';

const Education = () => {
    return (
        <section className={styles.section}>
            <EducationHeader />
            <EducationBody />
        </section>
    );
};

export default Education;