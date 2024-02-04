import "../../style/table.css";

const Table = () => {
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
