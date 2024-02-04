import "../../style/sidebar.css";

const Sidebar = ({ showSidebar }) => {
  return (
    <div className={showSidebar ? "sidebar show" : "sidebar"}>
      <p>easyIWS</p>
      <ul>
        <li>Documents</li>
        <li>Customers</li>
        <li>Products</li>
        <li>Distributors</li>
        <li>Receiving</li>
      </ul>
    </div>
  );
};

export default Sidebar;
