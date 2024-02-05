import { useContext } from "react";
import "../../style/sidebar.css";
import { OverlayContext } from "../../provider/OverlayContext";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { darkOverlay, setDarkOverlay } = useContext(OverlayContext);
  const navigate = useNavigate();

  const pages = [
    {
      label: "Documents",
      route: "/documents",
    },
    {
      label: "Customers",
      route: "/customers",
    },
    {
      label: "Products",
      route: "/products",
    },
    {
      label: "Distributors",
      route: "/distributors",
    },
    {
      label: "Receiving",
      route: "/receiving",
    },
  ];

  return (
    <div className={showSidebar && darkOverlay ? "sidebar show" : "sidebar"}>
      <p>easyIWS</p>
      <ul>
        {pages.map((page) => (
          <li
            onClick={() => {
              navigate(page.route), setShowSidebar(false), setDarkOverlay(false);
            }}
          >
            {page.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
