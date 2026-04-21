'use client';
import React from 'react';
import styles from './Education.module.scss';
import EducationBody from './EducationBody';
import SectionHeader from '../section-header/SectionHeader';
import { LoadableSections, Sections } from '@/models/enums';
import useSectionRef from '../hooks/useSectionRef';
import { languageStore, userStore } from '@/store';
import { useEducation } from '@/hooks/queries';
import { useAuth, useIsLoadingSections, useUi } from '@/hooks';
import { Box, Button, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CopyJsonButton from '@/components/copy-json-button';

const Education: React.FC = () => {
  const { strings } = languageStore();
  const { sectionRef } = useSectionRef({ sectionName: Sections.Education });
  const { user, isLoadingUser } = userStore();
  const { currentLanguage } = languageStore();
  const { data: education, isLoading: isLoadingEducation } = useEducation({
    id: user._id,
    lang: currentLanguage,
  });
  const { isEditMode, openEducationDialog } = useUi();
  const { isAdmin } = useAuth();
  const showAdd = isEditMode && isAdmin;
  const { handleLoad } = useIsLoadingSections();

  React.useEffect(() => {
    handleLoad({
      sectionName: LoadableSections.isLoadingEducation,
      isLoading: isLoadingEducation,
    });
  }, [isLoadingEducation]);

  return (
    <Box component={'section'} ref={sectionRef} className={styles.container}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ flex: 1 }}>
          <SectionHeader
            title={strings.education}
            description={strings.educationDescription}
            isLoading={isLoadingUser || isLoadingEducation}
          />
        </Box>
        {showAdd && (
          <>
            <CopyJsonButton data={education} />
            <Tooltip title={strings.addEducationTitle}>
              <Button
                onClick={() => openEducationDialog('add')}
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
      <EducationBody data={education} isLoading={isLoadingUser || isLoadingEducation} />
    </Box>
  );
};

export default Education;
