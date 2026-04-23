'use client';
import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { languageStore, userStore } from '@/store';
import { useUi } from '@/hooks';
import { useSkillMutations } from '@/hooks/queries';

const DeleteSkillDialog: React.FC = () => {
  const { strings } = languageStore();
  const { user } = userStore();
  const { skillDialog, closeSkillDialog } = useUi();
  const { deleteSkill } = useSkillMutations();

  const isOpen = skillDialog.mode === 'delete';
  const skill = skillDialog.skill;

  const handleDelete = () => {
    if (!skill || !user._id) return;
    deleteSkill.mutate(
      { userId: user._id, skillId: String(skill._id) },
      { onSuccess: () => closeSkillDialog() },
    );
  };

  return (
    <Dialog
      open={isOpen}
      onClose={closeSkillDialog}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: 3,
          bgcolor: 'defaultBackground.paper',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          m: { xs: 2, sm: 3 },
          width: { xs: 'calc(100% - 32px)', sm: 400 },
          maxWidth: { xs: 'calc(100% - 32px)', sm: 400 },
        },
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(135deg, #e53935 0%, #b71c1c 100%)',
          p: 2,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
        }}
      >
        <DeleteIcon sx={{ color: 'white', fontSize: 24, flexShrink: 0, mt: 0.25 }} />
        <DialogTitle
          sx={{ p: 0, color: 'white', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}
        >
          {strings.deleteSkillTitle}
        </DialogTitle>
      </Box>
      <DialogContent sx={{ pt: 3, pb: 2 }}>
        <Typography sx={{ color: 'secondary.main' }}>{strings.deleteSkillConfirmation}</Typography>
        {skill && (
          <Typography sx={{ color: 'secondary.main', fontWeight: 600, mt: 1 }}>
            {skill.formattedName}
          </Typography>
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
        <Button
          onClick={closeSkillDialog}
          disabled={deleteSkill.isPending}
          sx={{
            fontSize: '0.85rem',
            color: 'secondary.main',
            '&:hover': { bgcolor: 'rgba(102, 126, 234, 0.1)' },
          }}
        >
          {strings.cancelLabel}
        </Button>
        <Button
          onClick={handleDelete}
          disabled={deleteSkill.isPending}
          variant="contained"
          sx={{
            fontSize: '0.85rem',
            background: 'linear-gradient(135deg, #e53935 0%, #b71c1c 100%)',
            boxShadow: '0 2px 8px rgba(229, 57, 53, 0.3)',
            borderRadius: 2,
            px: 3,
            minWidth: 90,
            '&:hover': {
              background: 'linear-gradient(135deg, #c62828 0%, #8e0000 100%)',
              boxShadow: '0 4px 12px rgba(229, 57, 53, 0.4)',
            },
            '&.Mui-disabled': { background: 'rgba(255, 255, 255, 0.12)' },
          }}
        >
          {deleteSkill.isPending ? (
            <CircularProgress size={18} sx={{ color: 'white' }} />
          ) : (
            strings.deleteLabel
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteSkillDialog;
