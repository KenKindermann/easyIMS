import React, { useContext, useEffect, useState } from "react";
import Customers from "./Customers";
import { TableContext } from "../../provider/TableContext";
import ProgressBar from "../global/Progressbar";
import Products from "./Products";
import { DataContext } from "../../provider/DataContext";
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const { setSelectedItems } = useContext(TableContext);
  const [currentStep, setCurrentStep] = useState("Add Customer");

  const navigate = useNavigate();

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
      onClick: () => navigate("/documents"),
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
