'use client';
import React from 'react';
import { ISkills } from '@/models/interfaces';
import Icon from '@/components/icon/Icon';
import { IconButton, Popover, Tooltip } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth, useUi } from '@/hooks';
import { languageStore } from '@/store';

interface ISkillProps {
  skill: ISkills;
}

const Skill: React.FC<ISkillProps> = ({ skill }) => {
  const { isEditMode, openSkillDialog } = useUi();
  const { isAdmin } = useAuth();
  const { strings } = languageStore();
  const showActions = isEditMode && isAdmin;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;

  return (
    <>
      <Icon name={skill.name} />
      <p>{skill.formattedName}</p>
      {showActions && (
        <>
          <IconButton size="small" onClick={handleOpen} sx={{ color: 'secondary.main', p: 0.25 }}>
            <MoreVertIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            disableScrollLock
            anchorOrigin={
              isMobile
                ? { vertical: 'top', horizontal: 'center' }
                : { vertical: 'center', horizontal: 'right' }
            }
            transformOrigin={
              isMobile
                ? { vertical: 'bottom', horizontal: 'center' }
                : { vertical: 'center', horizontal: 'left' }
            }
            slotProps={{
              paper: {
                sx: {
                  bgcolor: 'primary.main',
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.08)',
                  p: 0.5,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 0.25,
                },
              },
            }}
          >
            <Tooltip title={strings.editLabel}>
              <IconButton
                size="small"
                onClick={() => {
                  handleClose();
                  openSkillDialog('edit', skill);
                }}
                sx={{ color: '#667eea' }}
              >
                <EditIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title={strings.deleteLabel}>
              <IconButton
                size="small"
                onClick={() => {
                  handleClose();
                  openSkillDialog('delete', skill);
                }}
                sx={{ color: '#e53935' }}
              >
                <DeleteIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
          </Popover>
        </>
      )}
    </>
  );
};

export default Skill;
