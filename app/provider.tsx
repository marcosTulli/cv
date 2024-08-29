'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SkeletonTheme } from 'react-loading-skeleton';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fefefe'
        }
    }
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode; }) {
    return (
        <QueryClientProvider client={queryClient}>
            <SkeletonTheme baseColor='#494949' highlightColor='#505050'>
                {children}
            </SkeletonTheme>
        </QueryClientProvider>
    );
}
