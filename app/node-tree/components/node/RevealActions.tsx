import React from 'react';
import { Box } from '@mui/material';
import { INodeProps } from '@/models/interfaces';
import { RevealChildren } from '../buttons';
import { useNode, useIsMobile } from '../../hooks';

const RevealActions: React.FC<INodeProps> = ({ node }) => {
  const { currentNodeOnHover } = useNode();
  const isMobile = useIsMobile();
  const hasChildren = node.children.length > 0;
  const isHovered = currentNodeOnHover?.id === node.id;
  const showButton = isMobile ? hasChildren : hasChildren && isHovered;

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
      {showButton && <RevealChildren node={node} />}
    </Box>
  );
};

export default RevealActions;
