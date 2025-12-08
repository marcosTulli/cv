'use client';
import React from 'react';
import styles from './Skills.module.scss';
import SkillsBody from './SkillsBody';
import SectionHeader from '../section-header/SectionHeader';
import { LoadableSections, Sections } from '@/models/enums';
import useSectionRef from '../hooks/useSectionRef';
import { languageStore, userStore } from '@/store';
import { useSkills } from '@/hooks/queries';
import { useIsLoadingSections } from '@/hooks';
import { Box } from '@mui/material';

const Skills: React.FC = () => {
  const { strings } = languageStore();
  const { sectionRef } = useSectionRef({ sectionName: Sections.Skills });
  const { user, isLoadingUser } = userStore();
  const { data: skillsData, isLoading: isLoadingSkills } = useSkills({
    id: user._id,
  });

  const { handleLoad } = useIsLoadingSections();

  React.useEffect(() => {
    handleLoad({
      sectionName: LoadableSections.isLoadingSkills,
      isLoading: isLoadingSkills,
    });
  }, [isLoadingSkills]);

  return (
    <Box component="section" ref={sectionRef} className={styles.container}>
      <SectionHeader
        title={strings.skills}
        description={strings.skillsDescription}
        isLoading={isLoadingUser || isLoadingSkills}
      />
      <SkillsBody skillsData={skillsData} isLoading={isLoadingUser || isLoadingSkills} />
    </Box>
  );
};

export default Skills;
