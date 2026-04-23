'use client';
import * as React from 'react';
import { Box, Button, FormControlLabel, Switch, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { languageStore, userStore } from '@/store';
import { useAuth, useLogout, useUi } from '@/hooks';
import { useSkills, useWorkExperience, useEducation } from '@/hooks/queries';
import useJsonLoader from '@/hooks/useJsonLoader';
import JsonActions from '@/components/json-actions';
import { fullCvTemplate } from '@/utils/jsonTemplates';

interface CvData {
  user?: {
    name?: string;
    email?: string;
    phone?: string;
    location?: string;
    network?: { linkedin?: { display?: string }; github?: { display?: string } };
    info?: { candidateTitle?: string; about?: string; languages?: { language?: string }[] };
  };
  skills?: { formattedName?: string }[];
  workExperience?: {
    companyName?: string;
    activePeriod?: { startDate?: string; endDate?: string };
    info?: { position?: string; tasks?: { task?: string }[] };
  }[];
  education?: { title?: string; content?: string }[];
}

const transformFullCv = (data: unknown): unknown => {
  const cv = data as CvData;
  return {
    user: {
      name: cv.user?.name,
      email: cv.user?.email,
      phone: cv.user?.phone,
      location: cv.user?.location,
      network: {
        linkedin: cv.user?.network?.linkedin?.display,
        github: cv.user?.network?.github?.display,
      },
      candidateTitle: cv.user?.info?.candidateTitle,
      about: cv.user?.info?.about,
      languages: cv.user?.info?.languages?.map((l) => l.language),
    },
    skills: cv.skills?.map((s) => s.formattedName),
    workExperience: cv.workExperience?.map((exp) => ({
      companyName: exp.companyName,
      position: exp.info?.position,
      startDate: exp.activePeriod?.startDate,
      endDate: exp.activePeriod?.endDate,
      tasks: exp.info?.tasks?.map((t) => t.task),
    })),
    education: cv.education?.map((e) => ({
      title: e.title,
      content: e.content,
    })),
  };
};

const EditModeSwitch: React.FC = () => {
  const { strings, currentLanguage } = languageStore();
  const { isEditMode, toggleEditMode, setEditMode } = useUi();
  const { isAdmin } = useAuth();
  const { logout } = useLogout();
  const { user } = userStore();
  const { data: skills } = useSkills({ id: user._id });
  const { data: workExperience } = useWorkExperience({ id: user._id, lang: currentLanguage });
  const { data: education } = useEducation({ id: user._id, lang: currentLanguage });
  const { loadFullCv } = useJsonLoader();

  const fullCvData = React.useMemo(
    () => ({
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        location: user.location,
        network: user.network,
        info: user.info,
      },
      skills,
      workExperience,
      education,
    }),
    [user, skills, workExperience, education],
  );

  React.useEffect(() => {
    if (!isAdmin && isEditMode) {
      setEditMode(false);
    }
  }, [isAdmin, isEditMode, setEditMode]);

  if (!isAdmin) return null;

  const editLabel = strings.editswitchlabel;
  const logoutLabel = strings.logoutButtonLabel;

  return (
    <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
      <Tooltip title={editLabel}>
        <FormControlLabel
          control={
            <Switch checked={isEditMode} onChange={toggleEditMode} color="secondary" size="small" />
          }
          label={editLabel}
          sx={{
            m: 0,
            color: 'secondary.main',
            '& .MuiFormControlLabel-label': { display: 'flex', alignItems: 'center' },
          }}
        />
      </Tooltip>
      {isEditMode && (
        <JsonActions
          data={fullCvData}
          onLoad={loadFullCv}
          transform={transformFullCv}
          template={fullCvTemplate}
          loadTitle="Load CV JSON"
        />
      )}
      <Tooltip title={logoutLabel}>
        <Button onClick={logout} color="secondary" sx={{ textTransform: 'none', minWidth: 'auto' }}>
          <LogoutIcon fontSize="small" />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default EditModeSwitch;
