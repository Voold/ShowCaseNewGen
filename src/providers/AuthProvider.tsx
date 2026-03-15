import React, { useEffect, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { authQueries } from '@/features/auth';
import { AuthContext } from './auth-context.ts';
import { ENDPOINTS } from '@/config/endpoints';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const { data: user, isLoading, isError } = authQueries.useMe();
  const { mutate: logoutMutation } = authQueries.useLogout();


  const logout = useCallback(() => {
    logoutMutation();
  }, [logoutMutation]);

  useEffect(() => {
    if (isError) navigate(ENDPOINTS.LOGIN);
  }, [isError, navigate]);

  const value = useMemo(() => ({
    user: user ?? null,
    isAuthenticated: !!user,
    isLoading,
    logout,
  }), [user, isLoading, logout]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};