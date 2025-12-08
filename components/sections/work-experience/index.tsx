'use client';
import React from 'react';
import styles from './WorkExperience.module.scss';
import WorkExperienceBody from './WorkExperienceBody';
import SectionHeader from '../section-header/SectionHeader';
import { LoadableSections, Sections } from '@/models/enums';
import useSectionRef from '../hooks/useSectionRef';
import { languageStore, userStore } from '@/store';
import { useWorkExperience } from '@/hooks/queries';
import { useIsLoadingSections } from '@/hooks';
import { Box } from '@mui/material';

const WorkExperience: React.FC = () => {
  const { strings, currentLanguage } = languageStore();
  const { user, isLoadingUser } = userStore();
  const { data, isLoading: isLoadingWorkExperience } = useWorkExperience({
    id: user._id,
    lang: currentLanguage,
  });

  const { sectionRef } = useSectionRef({
    sectionName: Sections.WorkExperience,
  });
  const { handleLoad } = useIsLoadingSections();

  React.useEffect(() => {
    handleLoad({
      sectionName: LoadableSections.isLoadingWorkExperience,
      isLoading: isLoadingWorkExperience,
    });
  }, [isLoadingWorkExperience]);

  return (
    <Box component="section" ref={sectionRef} className={styles.section}>
      <SectionHeader
        title={strings.workExperience}
        description={strings.workExperienceDescription}
        isLoading={isLoadingWorkExperience || isLoadingUser}
      />
      <WorkExperienceBody data={data} isLoading={isLoadingWorkExperience || isLoadingUser} />
    </Box>
  );
};

export default WorkExperience;
