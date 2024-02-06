import { useContext, useState } from "react";
import "../../style/navbar.css";
import Sidebar from "./Sidebar";
import { PopupContext } from "../../provider/PopupContext";
import { TableContext } from "../../provider/TableContext";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { setDarkOverlay } = useContext(PopupContext);
  const { currentTable } = useContext(TableContext);

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="toggle-bar-and-page">
            <div
              className="toggle-bar"
              onClick={() => {
                setShowSidebar(true), setDarkOverlay(true);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>{currentTable.title}</p>
          </div>
          <div>
            <p>Ken Kindermann</p>
          </div>
        </div>
      </nav>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Navbar;
