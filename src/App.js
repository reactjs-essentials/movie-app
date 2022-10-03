import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Home from "./Home";
import FilmDetails from "./FilmDetails";
import WatchList from "./WatchList";
import NewFilmFormik from "./NewFilmFormik";
import { Routes, Route } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";
import {
  userContextInitialState,
  UserContextProvider,
} from "./context/UserContext";

export default function App() {
  return (
    <>
      <div className="App">
        <UserContextProvider>
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
        </UserContextProvider>
      </div>
    </>
  );
}
