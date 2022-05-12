import { React, useState, useEffect } from "react";
import "./style.css";
import FilmList from "./FilmList";

const Home = () => {
  const [films, setFilms] = useState([]);

  const handleDeleteFilm = (imdbID) => {
    const newFilms = films.filter((film) => film.imdbID !== imdbID);
    setFilms(newFilms);
  };

  useEffect(() => {
    fetch("https://apimocha.com/moviesapi/film")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, []);

  return (
    <>
      <h1>Films List with Components</h1>
      {films && <FilmList films={films} handleDeleteFilm={handleDeleteFilm} />}
    </>
  );
};

export default Home;
