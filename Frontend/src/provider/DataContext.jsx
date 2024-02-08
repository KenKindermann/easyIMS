import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [activeState, setActiveState] = useState(false);

  const value = {
    activeState,
    setActiveState,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
