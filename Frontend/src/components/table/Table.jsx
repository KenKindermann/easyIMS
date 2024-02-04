import "../../style/table.css";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { customers, products } from "../../utils/tableFormatter.js";

const Table = ({ table }) => {
  const { data, error, fetchAll } = useFetch();
  const [currentTable, setCurrentTable] = useState(table);
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
  }, []);

  useEffect(() => {
    fetchAll(url);
  }, []);

  useEffect(() => {
    console.log(data, error);
  }, [data, error]);

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
                  <input type="checkbox" />
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
