import React from 'react';
import { Box, Fade } from '@mui/material';
import { CreateNode, RemoveNode } from '../buttons';
import { INodeProps } from '@/models/interfaces';
import { useNode } from '../../hooks';

const CreateActions: React.FC<INodeProps> = ({ node }) => {
  const { currentNodeOnHover: hoverNode } = useNode();
  const { id: hoverId } = hoverNode || { id: '' };
  const { id: parentId } = node;
  const display = hoverId === parentId;

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
