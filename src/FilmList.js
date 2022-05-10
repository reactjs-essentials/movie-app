import FilmItem from "./FilmItem";
const FilmList = (props) => {
  const films = props.films;
  return (
    <div className="film-list">
      <ul>
        {films.map((film) => (
          <li key={film.imdbID}>
            <FilmItem film={film} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
