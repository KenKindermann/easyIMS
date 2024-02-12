import React, { useContext, useEffect, useState } from "react";
import Customers from "./Customers";
import { TableContext } from "../../provider/TableContext";
import ProgressBar from "../global/Progressbar";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import { createPdf } from "../../utils/jsPdfServices.js";
import useAxios from "../../hooks/useAxios.jsx";
import moment from "moment";

const Invoice = () => {
  const { selectedItems, setSelectedItems } = useContext(TableContext);
  const [currentStep, setCurrentStep] = useState("Add Customer");
  const { postData } = useAxios();

  const navigate = useNavigate();

  const url = `http://localhost:8000/documents/invoices`;

  const createInvoice = async () => {
    const newInvoice = { ...selectedItems[0] };
    newInvoice.customer_id = newInvoice.id;
    delete newInvoice.id;
    newInvoice.date = moment().format("YYYY-MM-DD");

    const savedInvoice = await postData(url, newInvoice);
    const invoiceId = savedInvoice[0].id;
    addInvoiceProducts(savedInvoice);
  };

  const addInvoiceProducts = (savedInvoice) => {
    const url = `http://localhost:8000/documents/invoices/invoice_products`;
    const products = selectedItems.filter((product, index) => index > 0);

    products.map((item) => {
      item.invoice_id = savedInvoice[0].id;
      postData(url, item);
    });

    createPdf(savedInvoice[0], products);
    navigate("/documents/invoices");
  };

  const steps = [
    {
      label: "Add Customer",
      onClick: () => setCurrentStep("Add Customer"),
    },
    {
      label: "Add Products",
      onClick: () => setCurrentStep("Add Products"),
    },
    {
      label: "Create Invoice",
      onClick: createInvoice,
    },
  ];

  useEffect(() => {
    setSelectedItems([]);
  }, []);

  return (
    <>
      <ProgressBar steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      {currentStep === "Add Customer" ? <Customers /> : <Products />}
    </>
  );
};

export default Invoice;
