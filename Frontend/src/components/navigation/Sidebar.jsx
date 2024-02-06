import { useContext } from "react";
import "../../style/sidebar.css";
import { PopupContext } from "../../provider/PopupContext";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { darkOverlay, setDarkOverlay } = useContext(PopupContext);
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
            key={page.label}
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
