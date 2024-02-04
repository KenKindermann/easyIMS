import { useContext } from "react";
import "../../style/sidebar.css";
import { OverlayContext } from "../../provider/OverlayContext";

const Sidebar = ({ showSidebar }) => {
  const { darkOverlay } = useContext(OverlayContext);
  return (
    <div className={showSidebar && darkOverlay ? "sidebar show" : "sidebar"}>
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
