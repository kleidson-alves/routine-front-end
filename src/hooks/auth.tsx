import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface UserData {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

interface AuthState {
  user: UserData;
  token: string;
}

interface signInCredentials {
  email: string;
  password: string;
}

interface signUpCredentials {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserData;
  signIn(credentials: signInCredentials): Promise<void>;
  signUp(credential: signUpCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: UserData): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Routine:token');
    const user = localStorage.getItem('@Routine:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });
    const { user, token } = response.data;
    localStorage.setItem('@Routine:user', JSON.stringify(user));
    localStorage.setItem('@Routine:token', token);
    setData({ token, user });
  }, []);

  const signUp = useCallback(async ({ name, email, password }) => {
    const response = await api.post('/users', {
      name,
      email,
      password,
    });
  }, []);

  const signOut = useCallback(() => {
    setData({} as AuthState);
    localStorage.removeItem('@Routine:user');
    localStorage.removeItem('@Routine:token');
  }, []);

  const updateUser = useCallback(
    (user: UserData) => {
      localStorage.setItem('@Routine:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signUp, signOut, updateUser }}
    >
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
