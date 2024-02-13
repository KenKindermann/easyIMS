import Table from "../table/Table.jsx";
import ControlPanel from "../controlPanel/ControlPanel";
import { OpenPopup, Sort } from "../formControls/Buttons";
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
      const invoicesUrl = `http://localhost:8000/documents/invoices`;
      const invoices = await getData(invoicesUrl);

      const creditsUrl = `http://localhost:8000/documents/credits`;
      const credits = await getData(creditsUrl);

      if (invoices && credits) {
        const documents = [...invoices, ...credits];
        const dateAndTime = documents.map((doc) => ({
          ...doc,
          dateAndTime: `${doc.date} ${doc.time}`,
        }));

        const sortedDocuments = dateAndTime.sort((a, b) => new Date(b.dateAndTime) - new Date(a.dateAndTime));
        setDocumentData([...sortedDocuments]);
      }
    };
    fetchData();
  }, [activeState]);

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
      <Table data={documentData} />
    </>
  );
};

export default Documents;
