// CSS
import "../../style/table.css";

//Hooks
import { useContext } from "react";

// Context
import { TableContext } from "../../provider/TableContext.jsx";
import { DataContext } from "../../provider/DataContext.jsx";

// Components
import InputField from "../formControls/InputField.jsx";

const Table = ({ data, setReceivingData }) => {
  const { selectedItems, setSelectedItems } = useContext(TableContext);
  const { activeState } = useContext(DataContext);

  // Add or delete items in selectedItems when checkboxes checked status changes
  const handleCheckboxChange = (e, itemId) => {
    const selectedItem = data.find((item) => item.id === itemId);
    if (e.target.checked) {
      setSelectedItems([...selectedItems, selectedItem]);
    } else {
      const newSelectedItems = selectedItems.filter((item) => item.id !== itemId);
      setSelectedItems(newSelectedItems);
    }
  };

  // When key is enter, set receiving data
  const handleInputKeyDown = (e, item) => {
    if (e.key === "Enter") {
      const addedQuantity = parseInt(e.target.value);
      setReceivingData((prevState) =>
        prevState.map((product) =>
          product.id === item.id ? { ...product, stock: product.stock + addedQuantity } : product
        )
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
