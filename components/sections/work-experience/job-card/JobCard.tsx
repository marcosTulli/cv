import React from 'react';
import { IExperience } from '@/models/interfaces';
import styles from './JobCard.module.scss';
import { Box, IconButton, List, ListItem, Tooltip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { languageStore } from '@/store';
import { useAuth, useUi } from '@/hooks';

type JobCardProps = {
  experience: IExperience;
  language: string;
};

const JobCard: React.FC<JobCardProps> = ({ experience }) => {
  const { strings } = languageStore();
  const { isEditMode, openExperienceDialog } = useUi();
  const { isAdmin } = useAuth();
  const showActions = isEditMode && isAdmin;

  return (
    <Box className={styles.job} sx={{ color: 'secondary.main' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
        <Typography variant="h6" className={styles.companyName} sx={{ flex: 1 }}>
          {experience.companyName}
        </Typography>
        {showActions && (
          <Box sx={{ display: 'flex', gap: 0.5, flexShrink: 0 }}>
            <Tooltip title={strings.editLabel}>
              <IconButton
                size="small"
                onClick={() => openExperienceDialog('edit', experience)}
                sx={{ color: '#667eea' }}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title={strings.deleteLabel}>
              <IconButton
                size="small"
                onClick={() => openExperienceDialog('delete', experience)}
                sx={{ color: '#e53935' }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Box>

      <Typography variant="body2" className={styles.jobDetails} sx={{ mt: 0.5 }}>
        {experience.info?.position} | {experience.activePeriod?.startDate || ''} -{' '}
        {experience.activePeriod?.endDate
          ? experience.activePeriod.endDate
          : strings.activelyWorkingLabel}
      </Typography>

      <List
        component="ul"
        sx={{
          listStyleType: 'disc',
          '& .MuiListItem-root': { display: 'list-item' },
        }}
      >
        {experience.info.tasks?.map((task) => (
          <ListItem key={task._id}>{task.task}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default JobCard;
