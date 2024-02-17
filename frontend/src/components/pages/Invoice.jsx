// Hooks
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios.jsx";

// Components
import Customers from "./Customers";
import ProgressBar from "../global/Progressbar";
import Products from "./Products";

// Context
import { TableContext } from "../../provider/TableContext";

// Utils
import { createPdf } from "../../utils/jsPdfServices.js";

// Libraries
import moment from "moment";

const Invoice = () => {
  const [currentStep, setCurrentStep] = useState("Add Customer");
  const { selectedItems, setSelectedItems } = useContext(TableContext);
  const { postData } = useAxios();

  const navigate = useNavigate();

  const url = `https://easyims.onrender.com/documents/invoices`;

  // Clear selectedItems when page is loading
  useEffect(() => {
    setSelectedItems([]);
  }, []);

  // Create invoice
  const createInvoice = async () => {
    const newInvoice = { ...selectedItems[0] };

    // Change id to customer_id
    newInvoice.customer_id = newInvoice.id;
    delete newInvoice.id;

    // Set date and time
    newInvoice.date = moment().format("YYYY-MM-DD");
    newInvoice.time = moment().format("HH:mm:ss");

    // Post new invoice in db
    const savedInvoice = await postData(url, newInvoice);
    addInvoiceProducts(savedInvoice);
  };

  // Add invoice products
  const addInvoiceProducts = (savedInvoice) => {
    const url = `https://easyims.onrender.com/documents/invoices/invoice_products`;
    const products = selectedItems.filter((_, index) => index > 0);

    // Post products in db
    products.map((item) => {
      item.invoice_id = savedInvoice[0].id;
      postData(url, item);
    });

    // Create pdf and navigate to /documents
    createPdf(savedInvoice[0], products);
    navigate("/documents");
  };

  // Create invoice steps
  const steps = [
    {
      label: "Add Customer",
      onClick: () => setCurrentStep("Add Customer"),
    },
    {
      label: "Add Products",
      onClick: selectedItems.length >= 1 ? () => setCurrentStep("Add Products") : () => alert("No customer selected"),
    },
    {
      label: "Create Invoice",
      onClick: selectedItems.length >= 2 ? createInvoice : () => alert("No product selected"),
    },
  ];

  return (
    <>
      <ProgressBar steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      {currentStep === "Add Customer" ? <Customers /> : <Products />}
    </>
  );
};

export default Invoice;
