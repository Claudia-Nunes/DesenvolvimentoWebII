// src/context/AppContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface AppContextProps {
  values: number[];
  total: number;
  setValues: React.Dispatch<React.SetStateAction<number[]>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC = ({ children }) => {
  const [values, setValues] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);

  const contextValue: AppContextProps = {
    values,
    total,
    setValues,
    setTotal,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
