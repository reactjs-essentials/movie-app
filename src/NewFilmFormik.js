import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import Select from "./Select";
import { Formik, useFormik } from "formik";
import CreatableSelect from "react-select/creatable";

const NewFilmFormik = () => {
  const { data: allGenders } = useFetch(
    "https://apimocha.com/moviesapi/gender"
  );

  const selectedActors = [];

  //   const handleGenderOnChange = (selectedOptions) => {
  //     setNewFilm({
  //       ...newFilm,
  //       gender: selectedOptions,
  //     });
  //   };

  //   const handleActorsOnChange = (values) => {
  //     const actors = values.map((item) => item.value);
  //     setNewFilm({
  //       ...newFilm,
  //       actors: actors,
  //     });
  //   };
  const navigate = useNavigate();

  return (
    <div className="new-film-form">
      <h2>Add new film</h2>
      {allGenders && (
        <Formik
          enableReinitialize={true}
          initialValues={{
            imdbID: "",
            title: "",
            year: "",
            gender: [],
            director: "",
            actors: [],
          }}
          validate={(values) => {
            const errors = {};
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            fetch("https://apimocha.com/moviesapi/film/" + values.imdbID, {
              method: "POST",
              body: JSON.stringify(values),
            }).then(() => {
              console.log(values);
              setSubmitting(false);
              navigate("/");
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <label>imdbID</label>
              <input
                type="text"
                name="imdbID"
                value={values.imdbID}
                onChange={handleChange}
              ></input>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
              ></input>
              <label>Year</label>
              <input
                type="number"
                name="year"
                value={values.year}
                onChange={handleChange}
              ></input>
              <label>Gender</label>
              {values.gender && (
                <Select
                  name="gender"
                  collection={allGenders}
                  isMultiple={true}
                  handleOnChange={(e) => setFieldValue("gender", e)}
                  value={values.gender}
                ></Select>
              )}
              <label>Director</label>
              <input
                type="text"
                required
                name="director"
                value={values.director}
                onChange={handleChange}
              ></input>
              <label>Actors</label>
              <CreatableSelect
                className="label-input"
                isMulti
                onChange={(vals) => {
                  const actors = vals.map((item) => item.value);
                  setFieldValue("actors", actors);
                }}
                options={selectedActors}
              />
              <button type="submit">Add Film</button>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default NewFilmFormik;
