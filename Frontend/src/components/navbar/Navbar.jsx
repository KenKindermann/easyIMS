import "../../style/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="toggle-bar-and-page">
          <div className="toggle-bar">
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
  );
};

export default Navbar;
