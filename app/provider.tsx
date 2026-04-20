'use client';
import React from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeProvider } from '@mui/material';
import { useTheme } from '@/hooks';
import AuthProvider from './auth0-provider';
import EditFieldModal from '@/components/edit-field-modal';
import ExperienceFormModal from '@/components/experience-form-modal';
import DeleteExperienceDialog from '@/components/delete-experience-dialog';
import SkillFormModal from '@/components/skill-form-modal';
import DeleteSkillDialog from '@/components/delete-skill-dialog';
import GlobalSnackbar from '@/components/global-snackbar';
import TokenRefresher from '@/components/token-refresher';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache(),
});

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme baseColor="#494949" highlightColor="#505050">
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              pauseOnHover={false}
              theme={'dark'}
            />
            {children}
            <EditFieldModal />
            <ExperienceFormModal />
            <DeleteExperienceDialog />
            <SkillFormModal />
            <DeleteSkillDialog />
            <GlobalSnackbar />
            <TokenRefresher />
          </SkeletonTheme>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}
