import React from 'react';
import { Box } from '@mui/material';
import { CreateNode, RemoveNode } from '../buttons';
import { INodeProps } from '@/models/interfaces';
import { useNode, useIsMobile } from '../../hooks';
import { useEditModeStore } from '../../store';

const CreateActions: React.FC<INodeProps> = ({ node }) => {
  const { currentNodeOnHover: hoverNode } = useNode();
  const { id: hoverId } = hoverNode || { id: '' };
  const { id: parentId } = node;
  const isMobile = useIsMobile();
  const enableEdit = useEditModeStore((state) => state.enableEdit);

  const isHovered = hoverId === parentId;
  const display = isMobile ? enableEdit : isHovered;

  if (!display) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        pl: 1.5,
        alignItems: 'center',
      }}
    >
      <RemoveNode node={node} />
      <CreateNode node={node} />
    </Box>
  );
};

export default CreateActions;
