import { Routes, Route, Link } from "react-router-dom";
import './navbar.css'
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import { withTheme } from "styled-components";


const Navbar = () => {

  //const themeContext = useContext(ThemeContext)
  //console.log(themeContext)

  const { theme, setTheme } = useContext(ThemeContext)
  console.log(ThemeContext)

  function handleChangeTheme() {
    theme && theme == 'light' ? setTheme('dark') : setTheme('light')
    document.documentElement.style.setProperty("data-theme", theme);
  }

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
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
