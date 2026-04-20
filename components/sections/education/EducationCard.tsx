import * as React from 'react';
import styles from './Education.module.scss';
import { IEducation } from '@/models/interfaces';
import { Box, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth, useUi } from '@/hooks';

interface IEducationCard {
  school: IEducation;
}

const EducationCard: React.FC<IEducationCard> = ({ school }) => {
  const { isEditMode, openEducationDialog } = useUi();
  const { isAdmin } = useAuth();
  const showActions = isEditMode && isAdmin;

  return (
    <div className={styles.education}>
      <div className={styles.educationContent}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <h3 className={styles.educationTitle} style={{ flex: 1 }}>
            {school.title}
          </h3>
          {showActions && (
            <Box sx={{ display: 'flex', gap: 0.25, flexShrink: 0 }}>
              <Tooltip title="Edit">
                <IconButton
                  size="small"
                  onClick={() => openEducationDialog('edit', school)}
                  sx={{ color: '#667eea' }}
                >
                  <EditIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  size="small"
                  onClick={() => openEducationDialog('delete', school)}
                  sx={{ color: '#e53935' }}
                >
                  <DeleteIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Box>
        <p className={styles.educationDetails}>{school.content}</p>
      </div>
    </div>
  );
};

export default EducationCard;
