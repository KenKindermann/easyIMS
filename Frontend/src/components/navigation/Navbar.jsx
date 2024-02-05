import { useContext, useState } from "react";
import "../../style/navbar.css";
import Sidebar from "./Sidebar";
import { OverlayContext } from "../../provider/OverlayContext";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { setDarkOverlay } = useContext(OverlayContext);

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
            <p>Customers</p>
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
