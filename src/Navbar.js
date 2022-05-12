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
            <Link to="/new">New film</Link>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

<section>
  <ul>
    <li>
      <Link to="/">Films</Link>
    </li>
    <li>
      <Link to="/counter">Counter</Link>
    </li>
  </ul>
</section>;
