import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import api from '../services/api';

interface RoutineData {
  routine_id: string;
  routine_name: string;
  date: Date;
}

interface RoutineContextData {
  addRoutine({ routine_name, date }: RoutineData): Promise<void>;
}

const RoutineContext = createContext<RoutineContextData>(
  {} as RoutineContextData,
);

const RoutineProvider: React.FC = ({ children }) => {
  const addRoutine = useCallback(
    async ({ routine_id, routine_name, date }: RoutineData) => {
      const response = await api.post('/routines', {
        routine_id,
        routine_name,
        date,
      });
    },
    [],
  );

  return (
    <RoutineContext.Provider value={{ addRoutine }}>
      {children}
    </RoutineContext.Provider>
  );
};

function useRoutine(): RoutineContextData {
  const context = useContext(RoutineContext);

  if (!context) {
    throw new Error('useRoutine must be used within a RoutineProvider');
  }

  return context;
}

export { RoutineProvider, useRoutine };
