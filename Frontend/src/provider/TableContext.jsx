import { createContext, useState } from "react";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [currentTable, setCurrentTable] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const value = { currentTable, setCurrentTable, selectedItems, setSelectedItems, data, setData };

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};
