import ControlPanel from "../controlPanel/ControlPanel";
import useAxios from "../../hooks/useAxios.jsx";
import Table from "../table/Table.jsx";

import { Delete, Edit, OpenPopup, Sort } from "../formControls/Buttons";
import { DataContext } from "../../provider/DataContext.jsx";
import { customers } from "../../utils/tableFormatter.js";
import { useContext, useEffect, useState } from "react";

const Customers = () => {
  const [customerData, setCustomerData] = useState([]);
  const { getData } = useAxios();
  const { activeState, setActiveState } = useContext(DataContext);

  const url = "http://localhost:8000/customers";

  useEffect(() => {
    setActiveState({ title: "Customers", setData: setCustomerData, table: customers });
  }, []);

  useEffect(() => {
    getData(url);
  }, [activeState]);

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
