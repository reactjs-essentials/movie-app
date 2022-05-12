import FilmItem from "./FilmItem";

const FilmList = ({ films, handleDeleteFilm }) => {
  return (
    <>
      <h1>Films list</h1>
      <div className="film-list">
        <ul>
          {films.map((film) => (
            <li key={film.imdbID}>
              <FilmItem film={film} />
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
