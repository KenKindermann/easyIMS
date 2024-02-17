// Hooks
import useAxios from "../../hooks/useAxios.jsx";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Buttons
import { CustomButton, OpenPopup, Sort } from "../formControls/Buttons";

// Context
import { DataContext } from "../../provider/DataContext.jsx";
import { TableContext } from "../../provider/TableContext.jsx";

// TableFormatter
import { documents } from "../../utils/tableFormatter.js";

// Utils
import { createPdf } from "../../utils/jsPdfServices.js";

// Components
import Table from "../table/Table.jsx";
import ControlPanel from "../controlPanel/ControlPanel";

const Documents = () => {
  const [documentData, setDocumentData] = useState([]);
  const { getData } = useAxios();
  const { activeState, setActiveState } = useContext(DataContext);
  const { selectedItems, setSelectedItems } = useContext(TableContext);
  const navigate = useNavigate();

  // Set active state to documents and clear selectedItems when page is loading
  useEffect(() => {
    setActiveState({ title: "Documents", setData: setDocumentData, table: documents });
    setSelectedItems([]);
  }, []);

  // Fetch data when acitveState changes
  useEffect(() => {
    fetchData();
  }, [activeState]);

  // Fetch invoice data from db
  const fetchData = async () => {
    const url = `https://easyims.onrender.com/documents/invoices`;
    const invoices = await getData(url);

    // Merge date and time in one key
    if (invoices) {
      const dateAndTime = invoices.map((doc) => ({
        ...doc,
        dateAndTime: `${doc.date} ${doc.time}`,
      }));

      // Sort documents by date and time
      const sortedDocuments = dateAndTime.sort((a, b) => new Date(b.dateAndTime) - new Date(a.dateAndTime));
      setDocumentData([...sortedDocuments]);
    }
  };

  // Download document by clicking download button
  const downloadDocument = async () => {
    // Check the number of checked checkboxes
    if (selectedItems.length > 1) {
      alert("More than one document selected.");
    } else if (selectedItems.length === 0) {
      alert("No document selected.");
    } else {
      // When only one checkbox is checked, get the products data of the invoice and create pdf
      const url = `http://localhost:8000/documents/invoices/invoice_products/search?invoice_id=${selectedItems[0].id}`;
      const invoiceProducts = await getData(url);
      createPdf(selectedItems[0], invoiceProducts);
      fetchData();
    }
  };

  return (
    <>
      <ControlPanel
        controls={[
          <CustomButton key="add" onClick={() => navigate("/documents/invoices")} title={"Add"} icon={"Add"} />,
          <OpenPopup key="search" title="Search" />,
          <Sort key="sort" />,
          <CustomButton key="download" title="Download" icon="Download" onClick={downloadDocument} />,
        ]}
      />
      <Table data={documentData} />
    </>
  );
};

export default Documents;
