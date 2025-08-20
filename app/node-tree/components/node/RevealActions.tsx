import React from 'react';
import { Box } from '@mui/material';
import { INodeProps } from '@/models/interfaces';
import { RevealChildren } from '../buttons';
import { useNode } from '../../hooks';

const RevealActions: React.FC<INodeProps> = ({ node }) => {
  const { currentNodeOnHover } = useNode();
  return (
    <Box
      sx={{
        display: 'flex',
        height: '30px',
        gap: '0.8rem',
        paddingLeft: '1rem',
        mt: '2px',
      }}
    >
      {node.children.length && currentNodeOnHover?.id === node.id ? (
        <RevealChildren node={node} />
      ) : (
        <Box sx={{ width: '30px', height: '30px', display: 'flex' }} />
      )}
    </Box>
  );
};

export default RevealActions;
