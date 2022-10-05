import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: 500,
    margin: 25,
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips() {
  const classes = useStyles();
  const filmItems = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  function deleteFilm(film) {
    return {
      type: "DELETE_FILM",
      item: film,
    };
  }

  return (
    <div className={classes.root}>
      <h1>Your WatchList </h1>
      {filmItems.films.map((film, idx) => (
        <Chip
          key={idx}
          label={film.title}
          color="primary"
          onDelete={() => dispatch(deleteFilm(film))}
        />
      ))}
    </div>
  );
}
