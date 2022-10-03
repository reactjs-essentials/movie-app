import { Routes, Route, Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import { withTheme } from "styled-components";

import { UserContext } from "./context/UserContext";
const Navbar = () => {
  //const themeContext = useContext(ThemeContext)
  //console.log(themeContext)

  const { theme, setTheme } = useContext(ThemeContext);
  const { user, signIn, signOut } = useContext(UserContext);

  function handleChangeTheme() {
    theme && theme == "light" ? setTheme("dark") : setTheme("light");
    document.documentElement.style.setProperty("data-theme", theme);
    console.log(theme);
  }

  const handleLogin = () => {
    signIn();
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      <section>
        <nav className="navbar">
          <div className="links">
            <ul className={theme}>
              <li>
                <Link to="/">Films</Link>
              </li>
              <li>
                <Link to="/new">New film</Link>
              </li>
              <li>
                <Link to="/watchlist">WatchList</Link>
              </li>
              <li>
                <button onClick={handleChangeTheme}>Change Theme</button>
              </li>
              <li>
                <a>{theme}</a>
              </li>
              <li style={{ float: "right" }}>
                <button onClick={handleLogin}>Login</button>
              </li>
              <li style={{ float: "right" }}>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      {JSON.stringify(user)}
    </>
  );
};

export default Navbar;
