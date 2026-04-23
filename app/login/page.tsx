'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Paper, TextField, Typography, Alert, CircularProgress } from '@mui/material';
import { useLogin } from '@/hooks/queries';
import { useAuth } from '@/hooks';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [ready, setReady] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { mutate, isPending, isError } = useLogin();

  React.useEffect(() => {
    if (isAuthenticated) {
      router.replace('/');
    } else {
      setReady(true);
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email, password });
  };

  if (!ready) return null;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, sm: 3 },
        bgcolor: 'primary.main',
      }}
    >
      <Paper elevation={3} sx={{ p: { xs: 3, sm: 4 }, width: '100%', maxWidth: 400 }}>
        <Typography variant="h5" component="h1" sx={{ mb: 3, fontWeight: 600 }}>
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            required
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            required
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          {isError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              Login failed
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isPending || !email || !password}
            sx={{ py: 1.25 }}
          >
            {isPending ? <CircularProgress size={22} /> : 'Log in'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
