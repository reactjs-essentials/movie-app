import "./style.css";
import Navbar from "./Navbar";
import Home from "./Home";
import FilmDetails from "./FilmDetails";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/new"
              element={
                <div>
                  <p>New form here</p>
                </div>
              }
            ></Route>
            <Route path="/movie/:id" element={<FilmDetails />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}
