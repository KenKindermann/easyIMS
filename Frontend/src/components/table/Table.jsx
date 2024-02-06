import "../../style/table.css";
import useAxios from "../../hooks/useAxios";
import { useContext, useEffect, useState } from "react";
import { customers, products } from "../../utils/tableFormatter.js";
import { TableContext } from "../../provider/TableContext.jsx";

const Table = ({ table }) => {
  const { error, getData } = useAxios();
  const { data, currentTable, setCurrentTable, selectedItems, setSelectedItems } = useContext(TableContext);

  const url = `http://localhost:8000/${table}`;
  useEffect(() => {
    getData(url);
  }, [url]);

  useEffect(() => {
    switch (table) {
      case "customers":
        setCurrentTable(customers);
        break;
      case "products":
        setCurrentTable(products);
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

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  return (
    <section className="table">
      {currentTable && data ? (
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
                {currentTable.keys.map((key) => (
                  <td key={key}>{item[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Table;
