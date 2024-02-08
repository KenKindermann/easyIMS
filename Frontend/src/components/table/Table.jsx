import "../../style/table.css";
import InputField from "../formControls/InputField.jsx";

import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../provider/TableContext.jsx";
import { DataContext } from "../../provider/DataContext.jsx";

const Table = ({ data, setReceivingData, focusInputField }) => {
  const { selectedItems, setSelectedItems } = useContext(TableContext);
  const { activeState } = useContext(DataContext);

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
      {activeState && data && (
        <table>
          <thead>
            <tr>
              <th></th>
              {activeState.table.labels.map((label) => (
                <th key={label}>{label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.some((selectedItem) => selectedItem.id === item.id)}
                    id={item.id}
                    onChange={(e) => handleCheckboxChange(e, item.id)}
                  />
                </td>
                {activeState.title === "Receiving" && (
                  <td>
                    <InputField
                      style={{ width: "60px" }}
                      defaultValue={item.receiving}
                      onKeyDown={(e) => handleInputKeyDown(e, item)}
                    />
                  </td>
                )}
                {activeState.table.keys.map((key) => (
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
