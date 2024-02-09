import React, { useContext, useEffect, useState } from "react";
import Customers from "./Customers";
import { TableContext } from "../../provider/TableContext";
import ProgressBar from "../global/Progressbar";
import Products from "./Products";
import { DataContext } from "../../provider/DataContext";
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const { selectedItems, setSelectedItems } = useContext(TableContext);
  const { activeState, setActiveState } = useContext(DataContext);
  const [currentStep, setCurrentStep] = useState("Add Customer");
  const navigate = useNavigate();

  const steps = [
    {
      label: "Add Customer",
    },
    {
      label: "Add Product",
    },
    {
      label: "Create Invoice",
    },
  ];

  useEffect(() => {
    setSelectedItems([]);
  }, []);

  useEffect(() => {
    if (currentStep === "Create Invoice") {
      navigate("/documents");
    }
  }, [currentStep]);

  return (
    <>
      <ProgressBar steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      {currentStep === "Add Customer" ? <Customers /> : <Products />}
    </>
  );
};

export default Invoice;
