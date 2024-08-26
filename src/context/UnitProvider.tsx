import { createContext, useMemo, useState, useContext } from 'react';
import { Unit } from '../api/types';

interface UnitContext {
  unit: Unit;
  setUnit: (value: Unit) => void;
}

const UnitContext = createContext<UnitContext | null>(null);

export const UnitProvider = ({ children }: { children: React.ReactNode }) => {
  const [unit, setUnit] = useState<Unit>('metric');

  const value = useMemo(() => {
    return {
      unit,
      setUnit,
    };
  }, [unit]);

  return <UnitContext.Provider value={value}>{children}</UnitContext.Provider>;
};

export const useUnit = () => {
  const context = useContext(UnitContext);

  if (!context) {
    throw new Error('useUnit should be used within UnitContext.Provider');
  }

  return context;
};
