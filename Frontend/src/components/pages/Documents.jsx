import Table from "../table/Table.jsx";
import ControlPanel from "../controlPanel/ControlPanel";
import { OpenPopup, Sort } from "../formControls/Buttons";
import useAxios from "../../hooks/useAxios.jsx";
import { useContext, useState } from "react";
import { DataContext } from "../../provider/DataContext.jsx";

const Documents = () => {
  const [documentData, setDocumentData] = useState([]);
  const { getData } = useAxios();
  const { activeState, setActiveState } = useContext(DataContext);

  return (
    <>
      <ControlPanel
        controls={[<OpenPopup key="add" title="Add" />, <OpenPopup key="search" title="Search" />, <Sort key="sort" />]}
      />
      <Table />
    </>
  );
};

export default Documents;
