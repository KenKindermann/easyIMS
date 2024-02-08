import { useContext, useEffect, useState } from "react";
import "../../style/popup.css";
import { TableContext } from "../../provider/TableContext";
import { PopupContext } from "../../provider/PopupContext";
import useAxios from "../../hooks/useAxios";
import usePopup from "../../hooks/usePopup";
import { customerInputs } from "../../inputs/customerInputs";
import { productInputs } from "../../inputs/productInputs";
import { DataContext } from "../../provider/DataContext";

const AddPopup = () => {
  const { activeState } = useContext(DataContext);
  const { showPopup } = useContext(PopupContext);
  const { closePopup } = usePopup();
  const { postData } = useAxios();

  const url = `http://localhost:8000/${activeState.title}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    closePopup();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    data.stock = 0;

    for (let key in data) {
      if (data[key] === "") {
        data[key] = null;
      }
    }
    postData(url, data);
  };

  const inputs = {
    Customers: customerInputs,
    Products: productInputs,
  };

  const [netPurchasePrice, setNetPurchasePrice] = useState("");
  const [grossPurchasePrice, setGrossPurchasePrice] = useState("");
  const [grossRetailPrice, setGrossRetailPrice] = useState("");
  const [netRetailPrice, setNetRetailPrice] = useState("");
  const [tax, setTax] = useState("");
  const [margin, setMargin] = useState("");

  useEffect(() => {
    if (grossRetailPrice && tax) {
      setNetRetailPrice(Math.round((grossRetailPrice / (1 + tax / 100)) * 100) / 100);
    }
  }, [grossRetailPrice, tax]);

  useEffect(() => {
    if (netPurchasePrice && tax) {
      setGrossPurchasePrice(Math.round(netPurchasePrice * (1 + tax / 100) * 100) / 100);
    }
  }, [netPurchasePrice, tax]);

  useEffect(() => {
    if (netRetailPrice && grossRetailPrice) {
      setMargin(Math.round((netRetailPrice - netPurchasePrice) * 100) / 100);
    }
  }, [netRetailPrice, grossRetailPrice]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "net_purchase_price") {
      setNetPurchasePrice(value);
    } else if (name === "tax") {
      setTax(value);
    } else if (name === "gross_retail_price") {
      setGrossRetailPrice(value);
    }
  };

  return (
    <form className="input-area" onSubmit={(e) => handleSubmit(e)}>
      {inputs[activeState.title].map((field, index) => (
        <input
          type={field.type}
          key={field.key}
          name={field.key}
          placeholder={field.label}
          autoFocus={index === 0}
          required={field.required}
          onChange={handleInputChange}
          tabIndex={index % 2 === 0 ? index + 1 : index + inputs[activeState.title].length}
          value={
            field.key === "gross_purchase_price"
              ? grossPurchasePrice
              : field.key === "net_retail_price"
              ? netRetailPrice
              : field.key === "margin"
              ? margin
              : undefined
          }
        />
      ))}
      <button>{showPopup}</button>
    </form>
  );
};

export default AddPopup;
