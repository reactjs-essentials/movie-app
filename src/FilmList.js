import FilmItem from "./FilmItem";

const FilmList = ({ films, handleDeleteFilm }) => {
  return (
    <>
      <h1>Movies list</h1>
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
