import "../../style/table.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { customers, products } from "../../utils/tableFormatter.js";
import { TableContext } from "../../provider/TableContext.jsx";

const Table = ({ table }) => {
  const { data, error, fetchAll } = useFetch();
  const { currentTable, setCurrentTable, selectedId, setSelectedId } = useContext(TableContext);

  const url = `http://localhost:8000/${table}`;

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

  useEffect(() => {
    fetchAll(url);
  }, [url]);

  const handleCheckboxChange = (e, itemId) => {
    if (e.target.checked) {
      setSelectedId([...selectedId, itemId]);
    } else {
      const newSelectedIds = selectedId.filter((id) => id !== itemId);
      setSelectedId(newSelectedIds);
    }
  };

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
