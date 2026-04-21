import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Switch from '@mui/material/Switch';
import LanguageIcon from '@mui/icons-material/Public';
import DownloadIcon from '@mui/icons-material/Download';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import UploadIcon from '@mui/icons-material/Upload';
import { languageStore, themeStore, userStore, uiStore } from '@/store';
import { Language, Themes } from '@/models/enums';
import { useAuth, useDownload, useLogout, useTheme, useUi } from '@/hooks';
import { useActionsMenu } from '../../hooks/useActionsMenu';
import { useSkills, useWorkExperience, useEducation } from '@/hooks/queries';
import useJsonLoader from '@/hooks/useJsonLoader';
import LoadJsonModal from '@/components/load-json-modal';
import { fullCvTemplate } from '@/utils/jsonTemplates';

interface ActionItem {
  icon: React.ReactNode;
  name: string;
  onClick: () => void;
  custom?: React.ReactNode;
}

export function ActionsMenu() {
  const { isActionsMenuOpen, toggleActionsMenu } = useActionsMenu();
  const { toggleTheme, selectedTheme } = themeStore();
  const { currentLanguage, setLang, strings } = languageStore();
  const { handleDownload: download } = useDownload();
  const { theme } = useTheme();
  const { isAdmin } = useAuth();
  const { isEditMode, toggleEditMode } = useUi();
  const { logout } = useLogout();
  const { user } = userStore();
  const showSnackbar = uiStore((state) => state.showSnackbar);
  const { data: skills } = useSkills({ id: user._id });
  const { data: workExperience } = useWorkExperience({ id: user._id, lang: currentLanguage });
  const { data: education } = useEducation({ id: user._id, lang: currentLanguage });
  const { loadFullCv } = useJsonLoader();
  const [loadJsonOpen, setLoadJsonOpen] = React.useState(false);

  const handleClose = () => {
    if (isActionsMenuOpen) toggleActionsMenu();
  };

  const handleDownloadPDF = () => {
    download();
    handleClose();
  };

  const handleToggleTheme = () => {
    toggleTheme();
    handleClose();
  };

  const handleToggleLanguage = () => {
    setLang(currentLanguage === Language.EN ? Language.ES : Language.EN);
    handleClose();
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const handleCopyJson = () => {
    const fullData = {
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        location: user.location,
        network: {
          linkedin: user.network?.linkedin?.display,
          github: user.network?.github?.display,
        },
        candidateTitle: user.info?.candidateTitle,
        about: user.info?.about,
        languages: user.info?.languages?.map((l) => l.language),
      },
      skills: skills?.map((s) => s.formattedName),
      workExperience: workExperience?.map((exp) => ({
        companyName: exp.companyName,
        position: exp.info?.position,
        startDate: exp.activePeriod?.startDate,
        endDate: exp.activePeriod?.endDate,
        tasks: exp.info?.tasks?.map((t) => t.task),
      })),
      education: education?.map((e) => ({
        title: e.title,
        content: e.content,
      })),
    };
    navigator.clipboard.writeText(JSON.stringify(fullData, null, 2));
    showSnackbar(strings.jsonCopiedSuccess || 'JSON copied', 'success');
    handleClose();
  };

  const handleLoadJson = () => {
    setLoadJsonOpen(true);
    handleClose();
  };

  const isDark = selectedTheme === Themes.dark;

  const actions: ActionItem[] = [
    {
      icon: <LanguageIcon />,
      name: currentLanguage === Language.EN ? 'Español' : 'English',
      onClick: handleToggleLanguage,
    },
    {
      icon: isDark ? <LightModeIcon /> : <DarkModeIcon />,
      name: strings.toggleThemeAction || 'Toggle Theme',
      onClick: handleToggleTheme,
    },
    {
      icon: <DownloadIcon />,
      name: strings.downloadAction || 'Download PDF',
      onClick: handleDownloadPDF,
    },
  ];

  if (isAdmin) {
    actions.push({
      icon: <EditIcon />,
      name: strings.editswitchlabel || 'Edit',
      onClick: toggleEditMode,
      custom: (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Switch checked={isEditMode} onChange={toggleEditMode} color="secondary" size="small" />
        </Box>
      ),
    });
    actions.push({
      icon: <LogoutIcon />,
      name: strings.logoutButtonLabel || 'Log out',
      onClick: handleLogout,
    });
    if (isEditMode) {
      actions.push({
        icon: <ContentCopyIcon />,
        name: strings.copyJsonLabel || 'Copy JSON',
        onClick: handleCopyJson,
      });
      actions.push({
        icon: <UploadIcon />,
        name: strings.loadJsonLabel || 'Load JSON',
        onClick: handleLoadJson,
      });
    }
  }

  const loadModal = (
    <LoadJsonModal
      open={loadJsonOpen}
      onClose={() => setLoadJsonOpen(false)}
      onLoad={loadFullCv}
      template={fullCvTemplate}
      title="Load CV JSON"
    />
  );

  if (!isActionsMenuOpen) return loadModal;

  return (
    <>
      <Box
        onClick={handleClose}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1200,
          display: { xs: 'block', sm: 'none' },
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          bottom: 80,
          right: 16,
          display: 'flex',
          flexDirection: 'column-reverse',
          gap: 1.5,
          zIndex: 1250,
          '@media (min-width: 600px)': {
            display: 'none',
          },
        }}
      >
        {actions.map((action, index) => (
          <Box
            key={action.name}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 2,
              animation: `slideIn 0.2s ease-out ${index * 0.05}s both`,
              '@keyframes slideIn': {
                from: {
                  opacity: 0,
                  transform: 'translateX(20px)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateX(0)',
                },
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                padding: '8px 16px',
                borderRadius: 1,
                boxShadow: 2,
                whiteSpace: 'nowrap',
                fontSize: '0.875rem',
                border: `1px solid ${theme.palette.primary.dark}`,
              }}
            >
              {action.name}
            </Box>
            {action.custom || (
              <Fab size="small" onClick={action.onClick}>
                {action.icon}
              </Fab>
            )}
          </Box>
        ))}
      </Box>
      {loadModal}
    </>
  );
}
