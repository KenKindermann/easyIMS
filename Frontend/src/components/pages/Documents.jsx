import Table from "../table/Table.jsx";
import ControlPanel from "../controlPanel/ControlPanel";
import { CustomButton, OpenPopup, Sort } from "../formControls/Buttons";
import { documents, products } from "../../utils/tableFormatter.js";
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
    setActiveState({ title: "Documents", setData: setDocumentData, table: documents });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:8000/documents/invoices`;
      const invoices = await getData(url);

      if (invoices) {
        const dateAndTime = invoices.map((doc) => ({
          ...doc,
          dateAndTime: `${doc.date} ${doc.time}`,
        }));

        const sortedDocuments = dateAndTime.sort((a, b) => new Date(b.dateAndTime) - new Date(a.dateAndTime));
        setDocumentData([...sortedDocuments]);
      }
    };
    fetchData();
  }, [activeState]);

  return (
    <>
      <ControlPanel
        controls={[
          <CustomButton key="add" onClick={() => navigate("/documents/invoices")} title={"Add"} icon={"Add"} />,
          <OpenPopup key="search" title="Search" />,
          <Sort key="sort" />,
        ]}
      />
      <Table data={documentData} />
    </>
  );
};

export default Documents;
