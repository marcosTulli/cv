'use client';
import React from 'react';
import { authStore } from '@/store';
import authService from '@/services/authService';

const REFRESH_BUFFER_MS = 60_000; // refresh 1 minute before expiry

const getExpMs = (token: string): number | null => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return typeof payload.exp === 'number' ? payload.exp * 1000 : null;
  } catch {
    return null;
  }
};

const TokenRefresher: React.FC = () => {
  const accessToken = authStore((state) => state.accessToken);

  React.useEffect(() => {
    if (!accessToken) return;

    const expMs = getExpMs(accessToken);
    if (!expMs) return;

    const delay = expMs - Date.now() - REFRESH_BUFFER_MS;

    if (delay <= 0) {
      // Token already expired or about to — refresh now
      authService
        .refresh(accessToken)
        .then(({ access_token }) => authStore.getState().setToken(access_token))
        .catch(() => authStore.getState().clearToken());
      return;
    }

    const timer = setTimeout(() => {
      const currentToken = authStore.getState().accessToken;
      if (!currentToken) return;

      authService
        .refresh(currentToken)
        .then(({ access_token }) => authStore.getState().setToken(access_token))
        .catch(() => authStore.getState().clearToken());
    }, delay);

    return () => clearTimeout(timer);
  }, [accessToken]);

  return null;
};

export default TokenRefresher;
