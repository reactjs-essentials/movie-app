import "./style.css";
import FilmList from "./FilmList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isLoading,
    data: films,
  } = useFetch("https://apimocha.com/lab-films/films");

  const handleDeleteFilm = (imdbID) => {
    setIsLoading(true);
    fetch("https://apimocha.com/lab-films/films/" + imdbID, {
      method: "DELETE",
    }).then((res) => {
      const newFilms = films.filter((film) => film.imdbID !== imdbID);
      setFilms(newFilms);
      setIsLoading(false);
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
