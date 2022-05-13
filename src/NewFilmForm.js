import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewFilmForm = () => {
  const [newFilm, setNewFilm] = useState({
    imdbID: "",
    title: "",
    year: "",
    gender: "",
    director: "",
    actors: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://apimocha.com/moviesapi/film/" + newFilm.imdbID, {
      method: "POST",
      body: JSON.stringify(newFilm),
    }).then(() => navigate("/"));
  };
  const navigate = useNavigate();

  return (
    <div className="new-film-form">
      <h2>Add new film</h2>
      <form onSubmit={handleSubmit}>
        <label>imdbID</label>
        <input
          type="text"
          required
          value={newFilm?.imdbID}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              imdbID: e.target.value,
            });
          }}
        ></input>
        <label>Title</label>
        <input
          type="text"
          required
          value={newFilm?.title}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              title: e.target.value,
            });
          }}
        ></input>
        <label>Year</label>
        <input
          type="number"
          required
          value={newFilm?.year}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              year: e.target.value,
            });
          }}
        ></input>
        <label>Gender</label>
        <select
          value={newFilm?.gender}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              gender: e.target.value,
            });
          }}
        >
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Biography">Biography</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
        </select>

        <label>Director</label>
        <input
          type="text"
          required
          value={newFilm?.director}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              director: e.target.value,
            });
          }}
        ></input>
        <label>Actors</label>
        <input
          type="text"
          required
          value={newFilm?.actors}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              actors: e.target.value,
            });
          }}
        ></input>
        <button type="submit">Add Film</button>
      </form>
    </div>
  );
};

export default NewFilmForm;
