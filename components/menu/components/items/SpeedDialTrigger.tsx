import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import useActionsMenu from '../../hooks/useActionsMenu';

const SpeedDialTrigger: React.FC = () => {
  const { isActionsMenuOpen, toggleActionsMenu } = useActionsMenu();

  const handleClick = () => {
    toggleActionsMenu();
  };

  return (
    <Box
      component="button"
      onClick={handleClick}
      sx={{
        background: 'none',
        border: 'none',
        color: 'inherit',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1,
        transition: 'transform 0.3s',
        transform: isActionsMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
      }}
      aria-label="Open actions menu"
    >
      <SpeedDialIcon />
    </Box>
  );
};

export default SpeedDialTrigger;