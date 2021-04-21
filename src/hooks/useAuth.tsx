import React, { createContext, useCallback, useContext, useState } from 'react';
// import api from '../services/api';

interface userData {
  user: object;
  token: string;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: userData;
  signIn(credentials: Credentials): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<userData>({} as userData);
  // const [data, setData] = useState<userData>(() => {
  //   const token = localStorage.getItem('@Routine:token');
  //   const user = localStorage.getItem('@Routine:user');

  //   if (token && user) {
  //     return { token, user: JSON.parse(user) };
  //   }

  //   return {} as userData;
  // });

  const signIn = useCallback(async (credentials: Credentials) => {
    // const response = await api.post('/sections', credentials);
    // const { user, token } = response.data;
    // localStorage.setItem('@Routine:user', JSON.stringify(user));
    // localStorage.setItem('@Routine:token', token);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn }}>
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
