// Hooks
import useAxios from "../../hooks/useAxios.jsx";
import { useContext, useEffect, useState } from "react";

// Buttons
import { Delete, Edit, OpenPopup, Sort } from "../formControls/Buttons";

// Context
import { DataContext } from "../../provider/DataContext.jsx";
import { TableContext } from "../../provider/TableContext.jsx";

// TableFormatter
import { customers } from "../../utils/tableFormatter.js";

// Components
import ControlPanel from "../controlPanel/ControlPanel";
import Table from "../table/Table.jsx";

const Customers = () => {
  const [customerData, setCustomerData] = useState([]);
  const { getData } = useAxios();
  const { activeState, setActiveState } = useContext(DataContext);
  const { setSelectedItems } = useContext(TableContext);

  const url = "https://easyims.onrender.com/customers";

  // Set active state to Customers when page is loading
  useEffect(() => {
    setActiveState({ title: "Customers", setData: setCustomerData, table: customers });
  }, []);

  // Get data when active state changes
  useEffect(() => {
    getData(url);
  }, [activeState]);

  // Clear selected items when page is loading
  useEffect(() => {
    setSelectedItems([]);
  }, []);

  return (
    <>
      <ControlPanel
        controls={[
          <OpenPopup key="add" title="Add" />,
          <Edit key="edit" />,
          <Delete key="delete" />,
          <OpenPopup key="search" title="Search" />,
          <Sort key="sort" />,
        ]}
      />
      <Table data={customerData} />
    </>
  );
};

export default Customers;
