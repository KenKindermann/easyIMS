import "../../style/table.css";
import useAxios from "../../hooks/useAxios";
import { useContext, useEffect, useState } from "react";
import { customers, products, receiving } from "../../utils/tableFormatter.js";
import { TableContext } from "../../provider/TableContext.jsx";
import InputField from "../formControls/InputField.jsx";

const Table = ({ table }) => {
  const { error, getData } = useAxios();
  const {
    data,
    setData,
    currentTable,
    setCurrentTable,
    selectedItems,
    setSelectedItems,
    receivingData,
    setReceivingData,
  } = useContext(TableContext);

  const states = {
    data: data,
    receivingData: receivingData,
  };

  useEffect(() => {
    if (currentTable) {
      if (currentTable.title === "Receiving") {
        setData();
      } else {
        const url = `http://localhost:8000/${currentTable.db}`;
        getData(url);
      }
    }
  }, [currentTable]);

  useEffect(() => {
    switch (table) {
      case "customers":
        setCurrentTable(customers);
        break;

      case "products":
        setCurrentTable(products);
        break;

      case "receiving":
        setCurrentTable(receiving);
        break;

      default:
        break;
    }
  }, [table]);

  const handleCheckboxChange = (e, itemId) => {
    const selectedItem = data.find((item) => item.id === itemId);
    if (e.target.checked) {
      setSelectedItems([...selectedItems, selectedItem]);
    } else {
      const newSelectedItems = selectedItems.filter((item) => item.id !== itemId);
      setSelectedItems(newSelectedItems);
    }
  };

  const handleInputKeyDown = (e, item) => {
    if (e.key === "Enter") {
      const addedQuantity = parseInt(e.target.value);
      setReceivingData((prevState) =>
        prevState.map((product) => (product.id === item.id ? { ...product, receiving: addedQuantity } : product))
      );
    }
  };

  return (
    <section className="table">
      {currentTable && (
        <table>
          <thead>
            <tr>
              <th></th>
              {currentTable.labels.map((label) => (
                <th key={label}>{label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {states[currentTable.state]?.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.some((selectedItem) => selectedItem.id === item.id)}
                    id={item.id}
                    onChange={(e) => handleCheckboxChange(e, item.id)}
                  />
                </td>
                {currentTable.title === "Receiving" && (
                  <td>
                    <InputField
                      style={{ width: "60px" }}
                      defaultValue={item.receiving}
                      onKeyDown={(e) => handleInputKeyDown(e, item)}
                    />
                  </td>
                )}
                {currentTable.keys.map((key) => (
                  <td key={key}>{item[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Table;
