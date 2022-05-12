import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const FilmDetails = () => {
  const { id } = useParams();
  const {
    data: film,
    error,
    isLoading,
  } = useFetch("https://apimocha.com/moviesapi/film/" + id);
  return (
    <div className="film-details">
      <h2>film details - {id}</h2>

      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {film && (
        <div>
          <div>
            <img src={film.poster} alt="poster" />
          </div>
          <dl>
            <dt>title:</dt>
            <dd>{film.title}</dd>
            <dt>year:</dt>
            <dd>{film.year}</dd>
            <dt>rated:</dt>
            <dd>{film.rated}</dd>
            <dt>released:</dt>
            <dd>{film.released}</dd>
            <dt>runtime:</dt>
            <dd>{film.runtime}</dd>
            <dt>genre:</dt>
            <dd>{film.genre}</dd>
            <dt>director:</dt>
            <dd>{film.director}</dd>
            <dt>writer:</dt>
            <dd>{film.writer}</dd>
            <dt>actors:</dt>
            <dd>{film.actors}</dd>
            <dt>plot:</dt>
            <dd>{film.plot}</dd>
            <dt>language:</dt>
            <dd>{film.language}</dd>
            <dt>country:</dt>
            <dd>{film.country}</dd>
            <dt>plot:</dt>
            <dd>{film.plot}</dd>
            <dt>awards:</dt>
            <dd>{film.awards}</dd>
            <dt>awards:</dt>
            <dd>{film.awards}</dd>
            <dt>imdbRating:</dt>
            <dd>{film.imdbRating}</dd>
            poster
          </dl>
        </div>
      )}
    </div>
  );
};

export default FilmDetails;
