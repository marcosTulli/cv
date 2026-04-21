'use client';
import React from 'react';
import styles from './WorkExperience.module.scss';
import WorkExperienceBody from './WorkExperienceBody';
import SectionHeader from '../section-header/SectionHeader';
import { LoadableSections, Sections } from '@/models/enums';
import useSectionRef from '../hooks/useSectionRef';
import { languageStore, userStore } from '@/store';
import { useWorkExperience } from '@/hooks/queries';
import { useAuth, useIsLoadingSections, useUi } from '@/hooks';
import { Box, Button, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CopyJsonButton from '@/components/copy-json-button';

const WorkExperience: React.FC = () => {
  const { strings, currentLanguage } = languageStore();
  const { user, isLoadingUser } = userStore();
  const { data, isLoading: isLoadingWorkExperience } = useWorkExperience({
    id: user._id,
    lang: currentLanguage,
  });
  const { isEditMode, openExperienceDialog } = useUi();
  const { isAdmin } = useAuth();
  const showAdd = isEditMode && isAdmin;

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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ flex: 1 }}>
          <SectionHeader
            title={strings.workExperience}
            description={strings.workExperienceDescription}
            isLoading={isLoadingWorkExperience || isLoadingUser}
          />
        </Box>
        {showAdd && (
          <>
          <CopyJsonButton data={data} />
          <Tooltip title={strings.addExperienceTitle}>
              <Button
                onClick={() => openExperienceDialog('add')}
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
      <WorkExperienceBody data={data} isLoading={isLoadingWorkExperience || isLoadingUser} />
    </Box>
  );
};

export default WorkExperience;
