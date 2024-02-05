import { createContext, useState } from "react";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [currentTable, setCurrentTable] = useState(false);
  const [selectedId, setSelectedId] = useState([]);

  const value = { currentTable, setCurrentTable, selectedId, setSelectedId };

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};
