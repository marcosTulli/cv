'use client';
import React from 'react';
import { ISkills } from '@/models/interfaces';
import Icon from '@/components/icon/Icon';
import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth, useUi } from '@/hooks';

interface ISkillProps {
  skill: ISkills;
}

const Skill: React.FC<ISkillProps> = ({ skill }) => {
  const { isEditMode, openSkillDialog } = useUi();
  const { isAdmin } = useAuth();
  const showActions = isEditMode && isAdmin;

  return (
    <>
      <Icon name={skill.name} />
      <p>{skill.formattedName}</p>
      {showActions && (
        <>
          <Tooltip title="Edit">
            <IconButton
              size="small"
              onClick={() => openSkillDialog('edit', skill)}
              sx={{ color: '#667eea', p: 0.25 }}
            >
              <EditIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              size="small"
              onClick={() => openSkillDialog('delete', skill)}
              sx={{ color: '#e53935', p: 0.25 }}
            >
              <DeleteIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Tooltip>
        </>
      )}
    </>
  );
};

export default Skill;
