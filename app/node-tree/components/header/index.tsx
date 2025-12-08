import React from 'react';
import { Box, Switch, Typography } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useNode } from '../../hooks';

const Header: React.FC = () => {
  const { toggleEdit, enableEdit } = useNode();
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
            fontWeight: 700,
            color: 'white',
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          {'Node Tree'}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          bgcolor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: 2,
          px: 1.5,
          py: 0.5,
        }}
      >
        <Typography
          component="label"
          sx={{
            color: 'white',
            fontSize: { xs: '0.85rem', sm: '0.9rem' },
            fontWeight: 500,
          }}
        >
          Edit
        </Typography>
        <Switch
          checked={enableEdit}
          onChange={toggleEdit}
          size="small"
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: 'white',
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            },
            '& .MuiSwitch-track': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
