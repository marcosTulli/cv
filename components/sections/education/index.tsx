'use client';
import React from 'react';
import styles from './Education.module.scss';
import EducationBody from './EducationBody';
import SectionHeader from '../section-header/SectionHeader';
import { LoadableSections, Sections } from '@/models/enums';
import useSectionRef from '../hooks/useSectionRef';
import { languageStore, userStore } from '@/store';
import { useEducation } from '@/hooks/queries';
import { useIsLoadingSections } from '@/hooks';
import { Box } from '@mui/material';

const Education: React.FC = () => {
  const { strings } = languageStore();
  const { sectionRef } = useSectionRef({ sectionName: Sections.Education });
  const { user, isLoadingUser } = userStore();
  const { currentLanguage } = languageStore();
  const { data: education, isLoading: isLoadingEducation } = useEducation({
    id: user._id,
    lang: currentLanguage,
  });
  const { handleLoad } = useIsLoadingSections();

  React.useEffect(() => {
    handleLoad({
      sectionName: LoadableSections.isLoadingEducation,
      isLoading: isLoadingEducation,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingEducation]);

  return (
    <Box component={'section'} ref={sectionRef} className={styles.container}>
      <SectionHeader
        title={strings.education}
        description={strings.educationDescription}
        isLoading={isLoadingUser || isLoadingEducation}
      />
      <EducationBody
        data={education}
        isLoading={isLoadingUser || isLoadingEducation}
      />
    </Box>
  );
};

export default Education;
