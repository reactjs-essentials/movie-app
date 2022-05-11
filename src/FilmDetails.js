import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const FilmDetails = () => {
  const { id } = useParams();
  const {
    data: movie,
    error,
    isLoading,
  } = useFetch("https://apimocha.com/moviesapi/movie/" + id);
  return (
    <div className="film-details">
      <h2>Movie details - {id}</h2>

      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <div>
          <div>
            <img src={movie.poster} alt="poster" />
          </div>
          <dl>
            <dt>title:</dt>
            <dd>{movie.title}</dd>
            <dt>year:</dt>
            <dd>{movie.year}</dd>
            <dt>rated:</dt>
            <dd>{movie.rated}</dd>
            <dt>released:</dt>
            <dd>{movie.released}</dd>
            <dt>runtime:</dt>
            <dd>{movie.runtime}</dd>
            <dt>genre:</dt>
            <dd>{movie.genre}</dd>
            <dt>director:</dt>
            <dd>{movie.director}</dd>
            <dt>writer:</dt>
            <dd>{movie.writer}</dd>
            <dt>actors:</dt>
            <dd>{movie.actors}</dd>
            <dt>plot:</dt>
            <dd>{movie.plot}</dd>
            <dt>language:</dt>
            <dd>{movie.language}</dd>
            <dt>country:</dt>
            <dd>{movie.country}</dd>
            <dt>plot:</dt>
            <dd>{movie.plot}</dd>
            <dt>awards:</dt>
            <dd>{movie.awards}</dd>
            <dt>awards:</dt>
            <dd>{movie.awards}</dd>
            <dt>imdbRating:</dt>
            <dd>{movie.imdbRating}</dd>
            poster
          </dl>
        </div>
      )}
    </div>
  );
};

export default FilmDetails;
