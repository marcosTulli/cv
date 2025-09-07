'use client';
import * as React from 'react';
import { useAdminDialogStore } from '../hooks/useAdminDialog';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useAuth0 } from '@auth0/auth0-react';
import Image from 'next/image';

const OpenAdminDialogButton: React.FC = () => {
  const { toggle } = useAdminDialogStore();
  const click = () => {
    toggle();
  };
  const { user, isAuthenticated } = useAuth0();

  return (
    <Button sx={{ color: 'secondary.main' }} onClick={click}>
      {user && isAuthenticated ? (
        <Image
          style={{ borderRadius: '2rem' }}
          src={user.picture as string}
          width={40}
          height={40}
          alt="profile_picture"
        />
      ) : (
        <LoginIcon />
      )}
    </Button>
  );
};

export default OpenAdminDialogButton;
