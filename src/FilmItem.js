const FilmItem = (props) => {
  debugger;
  const film = props.film;
  return (
    <div>
      <dl>
        <dt>Film:</dt>
        <dd>{film.title}</dd>
        <dt>year:</dt>
        <dd>{film.year}</dd>
        <dt>genre:</dt>
        <dd>{film.genre}</dd>
        <dt>director:</dt>
        <dd>{film.director}</dd>
        <dt>actors:</dt>
        <dd>{film.actors}</dd>
      </dl>
    </div>
  );
};

export default FilmItem;
