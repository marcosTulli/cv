"use client";
import React from "react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "@/hooks";

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
            theme={"dark"}
          />
          {children}
        </SkeletonTheme>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
