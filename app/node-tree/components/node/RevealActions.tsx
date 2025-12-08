import React from 'react';
import { Box, Fade } from '@mui/material';
import { INodeProps } from '@/models/interfaces';
import { RevealChildren } from '../buttons';
import { useNode } from '../../hooks';

const RevealActions: React.FC<INodeProps> = ({ node }) => {
  const { currentNodeOnHover } = useNode();
  const hasChildren = node.children.length > 0;
  const isHovered = currentNodeOnHover?.id === node.id;
  const showButton = hasChildren && isHovered;

  return (
    <Box
      sx={{
        display: 'flex',
        width: '32px',
        height: '32px',
        alignItems: 'center',
        justifyContent: 'center',
        mr: 0.5,
      }}
    >
      <Fade in={showButton} timeout={150}>
        <Box sx={{ display: showButton ? 'flex' : 'none' }}>
          <RevealChildren node={node} />
        </Box>
      </Fade>
    </Box>
  );
};

export default RevealActions;
