import { React, useState, useEffect } from "react";
import "./style.css";
import FilmList from "./FilmList";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDeleteFilm = (imdbID) => {
    setIsLoading(true);
    fetch("https://apimocha.com/moviesapi/film/" + imdbID, {
      method: "DELETE",
    }).then((res) => {
      const newFilms = films.filter((film) => film.imdbID !== imdbID);
      setFilms(newFilms);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetch("https://apimocha.com/moviesapi/film")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Films List</h1>
      {isLoading && <p>...loading...</p>}
      {films && <FilmList films={films} handleDeleteFilm={handleDeleteFilm} />}
    </>
  );
};

export default Home;
