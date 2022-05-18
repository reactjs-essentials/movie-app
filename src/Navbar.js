import { Routes, Route, Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <section>
      <nav className="navbar">
        <div className="links">
          <ul className="menu">
            <li>
              <Link to="/">Films</Link>
            </li>
            <li>
              <Link to="/new">New film</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
