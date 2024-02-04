import "../../style/table.css";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const Table = ({ table }) => {
  const { data, error, fetchAll } = useFetch();
  const url = `http://localhost:8000/customers`;

  useEffect(() => {
    fetchAll(url);
  }, []);

  useEffect(() => {
    console.log(data, error);
  }, [data, error]);

  return (
    <section className="table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Customer No</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Street</th>
            <th>Zip code</th>
            <th>City</th>
            <th>Shipping street</th>
            <th>Shipping zip code</th>
            <th>Shipping city</th>
          </tr>
        </thead>

        <tbody>
          {/* <tr class="spacer" style={{ height: "15px" }}></tr> */}
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
            <td>Ken</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Table;
