import { createContext, useContext, useEffect, useState } from "react";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [currentTable, setCurrentTable] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [receivingData, setReceivingData] = useState([]);

  const value = {
    currentTable,
    setCurrentTable,
    selectedItems,
    setSelectedItems,
    data,
    setData,
    receivingData,
    setReceivingData,
  };

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};
