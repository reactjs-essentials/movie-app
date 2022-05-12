import { React, useState, useEffect } from "react";
import "./style.css";
import FilmList from "./FilmList";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setFilms(data);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        //Connection error
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Films List</h1>
      {error && <p> {error}</p>}
      {isLoading && <p>...loading...</p>}
      {films && <FilmList films={films} handleDeleteFilm={handleDeleteFilm} />}
    </>
  );
};

export default Home;
