import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import Select from "./Select";
import { Formik, Field, Form, ErrorMessage } from "formik";
import CreatableSelect from "react-select/creatable";
import * as Yup from "yup";

const NewFilmFormik = () => {
  const { data: allGenders } = useFetch(
    "https://apimocha.com/moviesapi/gender"
  );

  const selectedActors = [];
  const validateDirector = (value) => {
    let error;
    if (value.toLowerCase() === "will smith") {
      error = "Nice try, will is banned";
    }
    return error;
  };
  const navigate = useNavigate();

  const newFilmSchema = Yup.object().shape({
    imdbID: Yup.string().required("title is required!!"),
    title: Yup.string().required("title is required!!"),
    year: Yup.number()
      .integer()
      .moreThan(1884, "year not valid!")
      .lessThan(new Date().getFullYear() + 1, "year not valid!"),
  });

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
        validationSchema={newFilmSchema}
        // validate={(values) => {
        //   const errors = {};
        //   if (values.imdbID === "") {
        //     errors.imdbID = "imdbID is required!";
        //   }
        //   if (values.title === "") {
        //     errors.title = "title is required!";
        //   }
        //   if (values.year < 1885 || values.year > new Date().getFullYear()) {
        //     errors.year = "year not valid!";
        //   }
        //   return errors;
        // }}
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
            <Field name="year" type="number" />
            <ErrorMessage name="year" />

            <label htmlFor="year">Gender</label>

            <Field
              component="select"
              name="gender"
              onChange={(e) => {
                setFieldValue(
                  "gender",
                  [...e.target.selectedOptions].map((o) => o.value)
                );
              }}
              multiple={true}
            >
              {allGenders?.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Field>
            <ErrorMessage name="gender" />

            <label htmlFor="director">Director</label>
            <Field name="director" type="text" validate={validateDirector} />
            <ErrorMessage name="director" />

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
