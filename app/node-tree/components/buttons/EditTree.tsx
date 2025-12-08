import React from 'react';
import { Box, Switch, Typography } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useNode } from '../../hooks';
import { TreeControl } from './TreeControl';

export const EditTree: React.FC = () => {
  const { toggleEdit, enableEdit } = useNode();

  return (
    <TreeControl label={'edit'}>
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
        /></TreeControl>
  );
};

