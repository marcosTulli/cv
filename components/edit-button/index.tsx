'use client';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ButtonComponent from '../button';
import { languageStore } from '@/store';

interface IEditButtonProps {
  onClick: () => void;
  className?: string;
}

const EditButton: React.FC<IEditButtonProps> = ({ onClick, className }) => {
  const { strings } = languageStore();
  const label = strings.editLabel || 'Edit';

  return (
    <span className={className}>
      <ButtonComponent onClick={onClick} display variant="outlined" title={label}>
        <EditIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
      </ButtonComponent>
    </span>
  );
};

export default EditButton;
