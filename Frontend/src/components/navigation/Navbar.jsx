import { useContext, useState } from "react";
import "../../style/navbar.css";
import Sidebar from "./Sidebar";
import { PopupContext } from "../../provider/PopupContext";
import { TableContext } from "../../provider/TableContext";
import { DataContext } from "../../provider/DataContext";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { setDarkOverlay } = useContext(PopupContext);
  const { activeState } = useContext(DataContext);

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
            <p>{activeState.title}</p>
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
