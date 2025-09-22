import React from 'react';
import styles from './SinglePageTemplate.module.scss';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import { languageStore, userStore } from '@/store';
import { ILanguage } from '@/models/interfaces';

const SinglePageTemplate: React.FC = () => {
  const { user } = userStore();
  const { strings } = languageStore();

  return (
    <div className={styles.container}>
      <div className={styles.resumeWrapper}>
        <Header />

        <div className={styles.contentSection}>
          <Skills />
          <WorkExperience />
          <div className={styles.bottomRow}>
            <div className={styles.educationSection}>
              <Education />
            </div>
            <div className={styles.languagesSection}>
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{strings.languages}</h2>
                <div className={styles.languagesGrid}>
                  {user.info.languages?.map((language: ILanguage) => (
                    <div
                      key={language.language}
                      className={styles.languageItem}
                    >
                      <span className={styles.languageName}>
                        {language.language}:
                      </span>
                      <span className={styles.languageLevel}>
                        {language.level}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageTemplate;
