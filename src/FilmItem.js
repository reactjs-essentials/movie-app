const FilmItem = (props) => {
  const film = props.film;
  return (
    <div>
      <dl>
        <dt>Film:</dt>
        <dd>{film.Title}</dd>
        <dt>year:</dt>
        <dd>{film.Year}</dd>
        <dt>genre:</dt>
        <dd>{film.Genre}</dd>
        <dt>director:</dt>
        <dd>{film.Director}</dd>
        <dt>actors:</dt>
        <dd>{film.Actors}</dd>
      </dl>
    </div>
  );
};

export default FilmItem;
