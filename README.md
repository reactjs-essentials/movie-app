# movie-app
Collection of labs devided by branches pointing for the starting and ending of each lab.
Movie-app labs details in [reactjs: essentials](https://github.com/reactjs-essentials/training-content)

# LAB: List & components integration
#### starting branch: movie-app-part-01
#### ending branch:movie-app-part-02
### requirements:
- Add a component that list a collection of movies
- Movies object:
  - id
  - title
  - year
  - genre
  - director
  - actors
- Add pass list to a component named FilmList. Pass Film content to another component named FilmItem
 
# LAB: Challange - Remove item
### starting branch: movie-app-part-02
### ending branch: movie-app-part-03
## requirements:
- add a button on each FilmItem that remove the item from the list being displayed

#  LAB: API communication
### starting branch: movie-app-part-03
### ending branch: movie-app-part-04
## requirements:
- fetch data from API - GET https://apimocha.com/lab-films/films
- display fetched data instead of mocked data

# LAB Challange Loading indicator & delete button for each item
### starting branch: movie-app-part-04
### ending branch:movie-app-part-5
## requirements:
- loading while fetching
- Update Delete Button to remove from API
  - DELETE - https://apimocha.com/moviesapi/film/:imdbID

# LAB API handling errors
### starting branch: movie-app-part-05
### ending branch:movie-app-part-06
## requirements:
- Handling errors
- Response errors
- Interact with state properties along response errors

# LAB custom Hooks
### starting branch: movie-app-part-06
### ending branch:movie-app-part-07
## requirements:
- custom hook useFetch
- create a hook that with a single url be able to:
    - Fetch the data
    - Retrieve it
    - Control the loading indicator for the fetching process
    - Handling Errors
 
