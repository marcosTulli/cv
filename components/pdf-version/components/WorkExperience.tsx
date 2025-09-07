import React from 'react';
import { Typography } from '@mui/material';
import styles from '../SinglePageTemplate.module.scss';
import { languageStore, userStore } from '@/store';
import { useWorkExperience } from '@/hooks/queries';
import { IExperience } from '@/models/interfaces';

const WorkExperience: React.FC = () => {
  const { currentLanguage, strings } = languageStore();
  const { user } = userStore();
  const { data } = useWorkExperience({ id: user._id, lang: currentLanguage });
  const experiences: IExperience[] = data
    ? data
    : [
        {
          _id: '',
          activePeriod: { startDate: '', endDate: '' },
          comapnyUrl: '',
          companyLogo: '',
          companyName: '',
          info: { position: '', tasks: [{ _id: '', task: '' }] },
        },
      ];

  return (
    <section className={styles.section} aria-label="Work Experience">
      <Typography component="h2" className={styles.sectionTitle}>
        {strings.workExperience}
      </Typography>
      <div className={styles.experienceList}>
        {experiences?.map((experience) => (
          <article className={styles.experienceItem} key={experience._id}>
            <header className={styles.experienceHeader}>
              <div>
                <Typography component="h3" className={styles.jobTitle}>
                  {experience.info.position}
                </Typography>
                <Typography className={styles.companyName}>
                  {experience.companyName}
                </Typography>
              </div>
              <span className={styles.datePeriod}>
                {experience.activePeriod.startDate} -{' '}
                {experience.activePeriod.endDate.length > 0
                  ? experience.activePeriod.endDate
                  : 'Present'}
              </span>
            </header>
            <ul className={styles.taskList}>
              {experience.info.tasks?.slice(0, 4).map((task) => (
                <li key={task._id} className={styles.task}>
                  {task.task}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
