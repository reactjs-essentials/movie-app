import "./style.css";
import FilmList from "./FilmList";
import useFetch from "./useFetch";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  const {
    error,
    isLoading,
    data: films,
  } = useFetch("https://apimocha.com/moviesapi/film");

  const handleDeleteFilm = (imdbID) => {
    console.log(imdbID);
    fetch("https://apimocha.com/moviesapi/film/" + imdbID, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.token}` },
    }).then((res) => {
      //TODO:
    });
  };

  return (
    <>
      {error && <p> {error}</p>}
      {isLoading && <p>...loading...</p>}
      {films && <FilmList films={films} handleDeleteFilm={handleDeleteFilm} />}
    </>
  );
};

export default Home;
