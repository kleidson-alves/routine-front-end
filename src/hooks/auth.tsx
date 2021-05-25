import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface userData {
  user: object;
  token: string;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: Credentials): Promise<void>;
  signUp(credential: Credentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<userData>(() => {
    const token = localStorage.getItem('@Routine:token');
    const user = localStorage.getItem('@Routine:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as userData;
  });

  const signIn = useCallback(async (credentials: Credentials) => {
    alert('Muito bem');
    setData({ token: '123', user: { name: 'kleidson' } });
    return;
    const response = await api.post('/sections', credentials);
    const { user, token } = response.data;
    localStorage.setItem('@Routine:user', JSON.stringify(user));
    localStorage.setItem('@Routine:token', token);
    setData({ token, user });
  }, []);

  const signUp = useCallback(async (credentials: Credentials) => {
    return;
    const response = await api.post('/users', credentials);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Routine:user');
    localStorage.removeItem('@Routine:token');
    setData({} as userData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
