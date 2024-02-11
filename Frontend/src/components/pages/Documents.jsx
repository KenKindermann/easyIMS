import Table from "../table/Table.jsx";
import ControlPanel from "../controlPanel/ControlPanel";
import { OpenPopup, Sort } from "../formControls/Buttons";
import { products } from "../../utils/tableFormatter.js";
import useAxios from "../../hooks/useAxios.jsx";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../provider/DataContext.jsx";
import { Dropdown } from "../formControls/Buttons";
import { useNavigate } from "react-router-dom";

const Documents = () => {
  const [documentData, setDocumentData] = useState([]);
  const { getData } = useAxios();
  const { activeState, setActiveState } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveState({ title: "Documents", setData: setDocumentData, table: products });
  }, []);

  const DropDownItems = [
    {
      title: "Invoice",
      onClick: () => navigate("/documents/invoice/customers"),
    },
    {
      title: "Credit",
      onClick: () => navigate("/credit"),
    },
  ];

  return (
    <>
      <ControlPanel
        controls={[
          <Dropdown key="dropdown" title="Add" items={DropDownItems} />,
          <OpenPopup key="search" title="Search" />,
        ]}
      />
      <Table />
    </>
  );
};

export default Documents;
