import React from 'react';
import { Box, Typography } from '@mui/material';
import CreateActions from './CreateActions';
import { INodeProps } from '@/models/interfaces';
import RevealActions from './RevealActions';
import { useNode } from '../../hooks';

const Parent: React.FC<INodeProps> = ({ node }) => {
  const { setCurrentNodeOnHover, clearCurrentNodeOnHover, currentNodeOnHover } = useNode();
  const isHovered = currentNodeOnHover?.id === node.id;
  const isRoot = node.id === 'root';

  return (
    <Box
      sx={{
        width: 'fit-content',
        marginTop: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 2,
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={() => {
        setCurrentNodeOnHover({ node });
      }}
      onMouseLeave={() => {
        clearCurrentNodeOnHover();
      }}
    >
      <RevealActions node={node} />
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '0.85rem', sm: '0.9rem' },
          px: { xs: 1.5, sm: 2 },
          py: { xs: 0.5, sm: 0.75 },
          borderRadius: 2,
          background: isRoot
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            : 'rgba(102, 126, 234, 0.15)',
          color: isRoot ? 'white' : 'secondary.main',
          fontWeight: isRoot ? 600 : 500,
          boxShadow: isHovered
            ? '0 4px 12px rgba(102, 126, 234, 0.3)'
            : '0 2px 8px rgba(0, 0, 0, 0.1)',
          border: isRoot ? 'none' : '1px solid rgba(102, 126, 234, 0.2)',
          transition: 'all 0.2s ease',
          transform: isHovered ? 'translateY(-1px)' : 'none',
          cursor: 'default',
        }}
      >
        {node.title}
      </Typography>
      <CreateActions node={node} />
    </Box>
  );
};

export default Parent;
