// authContext.js
import React, {createContext, useContext, useEffect, useState} from 'react';
import {getData, storeData} from '../../../utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  userToken: null | string;
  loading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Step 2: Provide a default value that matches the interface
const defaultValue: AuthContextType = {
  userToken: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
};

const AuthContext = createContext<AuthContextType>(defaultValue);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [userToken, setUserToken] = useState<null | string>(null);

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const checkIfLoggedIn = async () => {
    const token = await getData('userToken');
    if (token) {
      setUserToken(token);
    }
    setLoading(false);
  };

  const login = async (token: string) => {
    await storeData('userToken', token);
    setUserToken(token);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    setUserToken(null);
  };

  const value = {
    userToken,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
