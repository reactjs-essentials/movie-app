import FilmItem from "./FilmItem";
import { Link } from "react-router-dom";

const FilmList = ({ films, handleDeleteFilm }) => {
  return (
    <>
      <h1>Film list</h1>
      <div className="film-list">
        <ul>
          {films.map((film) => (
            <li key={film.imdbID}>
              <FilmItem film={film} />
              <link></link>
              <Link to={`/film/${film.imdbID}`}>
                <button>Details</button>
              </Link>
              <button onClick={() => handleDeleteFilm(film.imdbID)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilmList;
