import React from 'react';
import { IExperience } from '@/models/interfaces';
import styles from './JobCard.module.scss';
import { Box, List, ListItem, Typography } from '@mui/material';

type JobCardProps = {
  experience: IExperience;
  language: string;
};

const JobCard: React.FC<JobCardProps> = ({ experience }) => {
  return (
    <Box className={styles.job} sx={{ color: 'secondary.main' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" className={styles.companyName}>
          {experience.companyName}
        </Typography>
      </Box>

      <Typography
        variant="body2"
        className={styles.jobDetails}
        sx={{ mt: 0.5 }}
      >
        {experience.info.position} | {experience.activePeriod.startDate} -{' '}
        {experience.activePeriod.endDate.length > 0
          ? experience.activePeriod.endDate
          : 'Present'}
      </Typography>

      <List
        component="ul"
        sx={{
          listStyleType: 'disc',
          '& .MuiListItem-root': {
            display: 'list-item',
          },
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
