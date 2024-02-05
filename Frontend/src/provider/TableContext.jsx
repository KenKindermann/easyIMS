import { createContext, useState } from "react";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [currentTable, setCurrentTable] = useState(false);
  const value = { currentTable, setCurrentTable };

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};
