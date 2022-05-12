import { Routes, Route, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header>Menu</header>
      <nav className="navbar">
        <div className="links">
          <li>
            <Link to="/">Films</Link>
          </li>
          <li>
            <Link to="/new">New Film</Link>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
