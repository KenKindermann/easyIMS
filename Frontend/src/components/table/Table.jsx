import "../../style/table.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { customers, products } from "../../utils/tableFormatter.js";
import { TableContext } from "../../provider/TableContext.jsx";

const Table = ({ table }) => {
  const { error, fetchAll } = useFetch();
  const { data, currentTable, setCurrentTable, selectedItems, setSelectedItems } = useContext(TableContext);

  const url = `http://localhost:8000/${table}`;
  useEffect(() => {
    fetchAll(url);
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
                <th>{label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr>
                <td>
                  <input type="checkbox" id={item.id} onChange={(e) => handleCheckboxChange(e, item.id)} />
                </td>
                {currentTable.keys.map((key) => (
                  <td>{item[key]}</td>
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
