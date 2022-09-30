import "./style.css";
import Navbar from "./Navbar";
import Home from "./Home";
import FilmDetails from "./FilmDetails";
import WatchList from "./WatchList";
import NewFilmFormik from "./NewFilmFormik";
import { Routes, Route } from "react-router-dom";
import {ThemeContextProvider} from "./context/ThemeContext"

export default function App() {
  return (
  <>
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
      </ThemeContextProvider>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<NewFilmFormik />}></Route>
          <Route path="/film/:id" element={<FilmDetails />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
        </Routes>
      </div>
    </div>
  </>
  );
}
