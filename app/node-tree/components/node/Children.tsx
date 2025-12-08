import React from 'react';
import { Box, Collapse } from '@mui/material';
import { INodeProps } from '@/models/interfaces';
import Node from './index';

const Children: React.FC<INodeProps> = ({ node }) => {
  return (
    <Collapse in={node.revealChildren} timeout={200}>
      <Box
        component="ul"
        sx={{
          listStyleType: 'none',
          pl: { xs: '1.5rem', sm: '2rem' },
          margin: 0,
          borderLeft: '2px solid rgba(102, 126, 234, 0.2)',
          ml: 2,
        }}
      >
        {node.children?.map((childNode) => (
          <li key={childNode.id}>
            <Node node={childNode} />
          </li>
        ))}
      </Box>
    </Collapse>
  );
};

export default Children;
