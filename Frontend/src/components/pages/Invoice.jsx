import React, { useContext, useEffect, useState } from "react";
import Customers from "./Customers";
import { TableContext } from "../../provider/TableContext";
import ProgressBar from "../global/Progressbar";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import { createPdf } from "../../utils/jsPdfServices.js";

const Invoice = () => {
  const { selectedItems, setSelectedItems } = useContext(TableContext);
  const [currentStep, setCurrentStep] = useState("Add Customer");

  const navigate = useNavigate();

  const createInvoice = () => {
    const newInvoice = { ...selectedItems[0] };
    newInvoice.customer_id = newInvoice.id;
    delete newInvoice.id;
    console.log(newInvoice);
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
