'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeProvider } from '@mui/material';
import { useTheme } from './hooks';


const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode; }) {
    const { theme } = useTheme();


    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <SkeletonTheme baseColor='#494949' highlightColor='#505050'>
                    {children}
                </SkeletonTheme>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
