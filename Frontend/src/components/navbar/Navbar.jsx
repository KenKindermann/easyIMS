import { useState } from "react";
import "../../style/navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="toggle-bar-and-page">
            <div className="toggle-bar" onClick={() => setShowSidebar(true)}>
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
      <Sidebar showSidebar={showSidebar} />
    </>
  );
};

export default Navbar;
