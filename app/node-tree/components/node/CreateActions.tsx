import React from 'react';
import { Box, Fade } from '@mui/material';
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

  return (
    <Fade in={display} timeout={150}>
      <Box
        sx={{
          display: display ? 'flex' : 'none',
          gap: 1,
          pl: 1.5,
          alignItems: 'center',
        }}
      >
        <RemoveNode node={node} />
        <CreateNode node={node} />
      </Box>
    </Fade>
  );
};

export default CreateActions;
