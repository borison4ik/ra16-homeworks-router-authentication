import React, { useState } from 'react';
import { $fetch } from 'ohmyfetch';

import AuthContext from '../../contexts/AuthContext';
import useStorage from '../../hooks/useStorage';
import { useNavigate } from 'react-router-dom';

interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useStorage(localStorage, 'token');
  const [profile, setProfile] = useStorage(localStorage, 'profile', true);
  const [authError, setAuthError] = useState('');
  let navigate = useNavigate();

  const onLogin = async (values: any) => {
    try {
      const { token } = await $fetch(`${process.env.REACT_APP_USER_AUTH_API}`, {
        method: 'POST',
        body: { ...values },
      });
      setToken(token);
      navigate('/news');
    } catch (error: any) {
      setAuthError('Auth Error!');
      setToken(null);
      setProfile(null);
    }
  };

  const getProfile = async (token: string) => {
    try {
      const profile = await $fetch(`${process.env.REACT_APP_USER_PROFILE_API}`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }).catch((error) => setAuthError(error.data));
      setProfile(profile);
    } catch (error: any) {
      setAuthError('Profile Error!');
    }
  };

  const onLogout = () => {
    setToken(null);
    setProfile(null);
    navigate('/');
  };

  return <AuthContext.Provider value={{ token, profile, authError, onLogin, onLogout, getProfile }}>{children}</AuthContext.Provider>;
};
