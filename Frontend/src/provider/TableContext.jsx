// Hooks
import { createContext, useEffect, useState } from "react";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [currentState, setCurrentState] = useState(null);
  const [pageTitle, setPageTitle] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [receivingData, setReceivingData] = useState([]);

  const value = {
    pageTitle,
    setPageTitle,
    selectedItems,
    setSelectedItems,
    currentState,
    setCurrentState,
    receivingData,
    setReceivingData,
  };

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};
