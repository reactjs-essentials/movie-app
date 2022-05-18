import FilmItem from "./FilmItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: rgb(255 88 0);
`;

// The Button from the last section without the interpolations
const Button = styled.button`
  color: orange;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid orange;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: red;
  border-color: red;
`;

const StyledUl = styled.ul`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    display: flex;
    flex-direction : row;
    flex-wrap: wrap;
    align-items : center;
    justify-content: center;
    gap: 10 px;
    padding : 0px;
`;

const StyledLi = styled.li`
    list-style: none;
    border : 2px solid orange;
    border-radius: 8px;
    margin : 8px;
    width: 400px;
    height: 350px; 
    display: flex;
    flex-direction : column;
    align-items : center;
    
`;

const FilmList = ({ films, handleDeleteFilm }) => {
  return (
    <>
      <Title>Film list</Title>
      <div className="film-list">
        <StyledUl>
          {films.map((film) => (
            <StyledLi key={film.imdbID}>
              <FilmItem film={film} />
              <nav>
                <Link to={`/film/${film.imdbID}`}>
                  <Button>Details</Button>
                </Link>
                <TomatoButton onClick={() => handleDeleteFilm(film.imdbID)}>
                  Delete
                </TomatoButton>
              </nav>
            </StyledLi>
          ))}
        </StyledUl>
      </div>
    </>
  );
};

export default FilmList;
