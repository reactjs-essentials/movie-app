import "./style.css";
import FilmList from "./FilmList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    error,
    isLoading,
    data: films,
  } = useFetch("https://apimocha.com/moviesapi/film");

  const handleDeleteFilm = (imdbID) => {
    fetch("https://apimocha.com/moviesapi/film/" + imdbID, {
      method: "DELETE",
    }).then((res) => {
      // TODO:
    });
  };

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
