import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { RoutineProvider } from './routine';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <RoutineProvider>
      <ToastProvider>{children}</ToastProvider>
    </RoutineProvider>
  </AuthProvider>
);

export default AppProvider;
