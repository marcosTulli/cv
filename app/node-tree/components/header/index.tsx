import React from 'react';
import { Box, Typography } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { EditTree } from '../buttons/EditTree';
import { ClearTree } from '../buttons/ClearTree';

const Header: React.FC = () => {
  return (
    <Box
      id="title"
      component="header"
      sx={{
        p: { xs: 2.5, sm: 3 },
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <AccountTreeIcon sx={{ fontSize: { xs: 28, sm: 32 }, color: 'white' }} />
        <Typography
          variant="h5"
          sx={{
            display: { xs: 'none', sm: 'block' },
            fontWeight: 700,
            color: 'white',
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          {'Node Tree'}
        </Typography>
      </Box>
      <Box id="tree-controls" sx={{ display: 'flex', gap: 1 }}>
        <EditTree />
        <ClearTree />
      </Box>
    </Box>
  );
};

export default Header;
