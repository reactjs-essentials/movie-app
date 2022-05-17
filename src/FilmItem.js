import styled from "styled-components";

const mystyle = {
  color: "black",
  fontFamily: "Arial",
  fontWeight : "Bold"
};

const FilmItem = (props) => {
  const film = props.film;
  return (
    <dl style = {{margin: '12px'}}>
        <dt style={{ color: 'orange', fontSize: 22 , fontWeight : "Bold"}}>Film:</dt>
        <dd>{film.title}</dd>
        <dt style={mystyle}>year:</dt>
        <dd>{film.year}</dd>
        <dt style={mystyle}>genre:</dt>
        <dd>{film.genre}</dd>
        <dt style={mystyle}>director:</dt>
        <dd>{film.director}</dd>
        <dt style={mystyle}>actors:</dt>
        <dd>{film.actors}</dd>
      </dl>
  );
};

export default FilmItem;
