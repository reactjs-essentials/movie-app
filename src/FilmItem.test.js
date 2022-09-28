import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import FilmItem from './FilmItem'

test('render FilmItem', async () => {

  const mockFilm = {
    title : 'test',
    year : 1989,
    director : 'director test',
    actors : 'actor test',
  }
  const component = render(<FilmItem film={mockFilm}  />)

  expect(component.getByText("actors:")).toBeInTheDocument();
  
})