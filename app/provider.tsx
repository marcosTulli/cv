'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageContextProvider } from '@/app/contexts/LanguageContext';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode; }) {
    return (
        <QueryClientProvider client={queryClient}>
            <LanguageContextProvider>
                {children}
            </LanguageContextProvider>
        </QueryClientProvider>
    );
}
