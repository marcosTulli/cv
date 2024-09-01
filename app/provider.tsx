'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SkeletonTheme } from 'react-loading-skeleton';
import { createTheme, ThemeProvider } from '@mui/material';
import { themeStore } from './store';


const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode; }) {
    const store = themeStore();

    console.log(store);
    const dark = createTheme({
        palette: {
            primary: {
                main: '#b887e0'
            }
        }
    });

    const light = createTheme({
        palette: {
            primary: {
                main: '#4b0082'
            }
        }
    });

    const theme = store.theme === 'dark' ? dark : light;

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
