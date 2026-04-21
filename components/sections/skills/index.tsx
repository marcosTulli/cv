'use client';
import React from 'react';
import styles from './Skills.module.scss';
import SkillsBody from './SkillsBody';
import SectionHeader from '../section-header/SectionHeader';
import { LoadableSections, Sections } from '@/models/enums';
import useSectionRef from '../hooks/useSectionRef';
import { languageStore, userStore } from '@/store';
import { useSkills } from '@/hooks/queries';
import { useAuth, useIsLoadingSections, useUi } from '@/hooks';
import { Box, Button, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CopyJsonButton from '@/components/copy-json-button';

const Skills: React.FC = () => {
  const { strings } = languageStore();
  const { sectionRef } = useSectionRef({ sectionName: Sections.Skills });
  const { user, isLoadingUser } = userStore();
  const { data: skillsData, isLoading: isLoadingSkills } = useSkills({
    id: user._id,
  });
  const { isEditMode, openSkillDialog } = useUi();
  const { isAdmin } = useAuth();
  const showAdd = isEditMode && isAdmin;

  const { handleLoad } = useIsLoadingSections();

  React.useEffect(() => {
    handleLoad({
      sectionName: LoadableSections.isLoadingSkills,
      isLoading: isLoadingSkills,
    });
  }, [isLoadingSkills]);

  return (
    <Box component="section" ref={sectionRef} className={styles.container}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ flex: 1 }}>
          <SectionHeader
            title={strings.skills}
            description={strings.skillsDescription}
            isLoading={isLoadingUser || isLoadingSkills}
          />
        </Box>
        {showAdd && (
          <>
          <CopyJsonButton
            data={skillsData}
            transform={(d) => (Array.isArray(d) ? d.map((s: Record<string, unknown>) => s.formattedName) : d)}
          />
          <Tooltip title={strings.addSkillTitle}>
              <Button
                onClick={() => openSkillDialog('add')}
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '0.85rem',
                  flexShrink: 0,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)',
                  },
                }}
              >
                {strings.addLabel}
              </Button>
            </Tooltip>
          </>
        )}
      </Box>
      <SkillsBody skillsData={skillsData} isLoading={isLoadingUser || isLoadingSkills} />
    </Box>
  );
};

export default Skills;
