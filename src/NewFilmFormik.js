import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import Select from "./Select";
import { Formik, Field, Form, ErrorMessage } from "formik";
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
          <Form onSubmit={handleSubmit}>
            <label htmlFor="imdbID">imdbID</label>
            <Field name="imdbID" type="text" />
            <ErrorMessage name="imdbID" />

            <label htmlFor="title">Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" />

            <label htmlFor="year">Year</label>
            <Field name="year" type="text" />
            <ErrorMessage name="year" />

            <label htmlFor="year">Gender</label>
            {values.gender && (
              <Select
                name="gender"
                collection={allGenders}
                isMultiple={true}
                handleOnChange={(e) => setFieldValue("gender", e)}
                value={values.gender}
              ></Select>
            )}
            <label htmlFor="director">Director</label>
            <Field name="director" type="text" />
            <ErrorMessage name="diector" />

            <label htmlFor="year">Actors</label>
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewFilmFormik;
