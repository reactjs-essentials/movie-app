import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import Select from "./Select";

import CreatableSelect from "react-select/creatable";

const NewFilmForm = () => {
  const [newFilm, setNewFilm] = useState({
    imdbID: "",
    title: "",
    year: "",
    gender: [],
    director: "",
    actors: [],
  });

  // const [allGenders, setAllGenders] = useState(null);
  const {
    error,
    isLoading,
    data: allGenders,
  } = useFetch("https://apimocha.com/moviesapi/gender");

  const selectedActors = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://apimocha.com/moviesapi/film/" + newFilm.imdbID, {
      method: "POST",
      body: JSON.stringify(newFilm),
    }).then(() => navigate("/"));
  };

  const handleGenderOnChange = (selectedOptions) => {
    setNewFilm({
      ...newFilm,
      gender: selectedOptions,
    });
  };

  const handleActorsOnChange = (values) => {
    const actors = values.map((item) => item.value);
    setNewFilm({
      ...newFilm,
      actors: actors,
    });
  };
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://apimocha.com/moviesapi/gender")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllGenders([...data]);
  //     });
  // }, []);

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
        {allGenders && (
          <Select
            collection={allGenders}
            isMultiple={true}
            handleOnChange={handleGenderOnChange}
            value={newFilm?.gender}
          ></Select>
        )}
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
        <CreatableSelect
          className="label-input"
          isMulti
          onChange={handleActorsOnChange}
          options={selectedActors}
        />
        <button type="submit">Add Film</button>
      </form>
    </div>
  );
};

export default NewFilmForm;
