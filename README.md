# movie-app
Collection of labs devided by branches pointing for the starting and ending of each lab.
Movie-app labs details in [reactjs: essentials](https://github.com/reactjs-essentials/training-content)

# LAB 1: Lists 
#### starting branch: movie-app-part-00
#### ending branch:movie-app-part-01
### requirements:
- Add a component that list a collection of movies
- Movies object:
  - id
  - title
  - year
  - genre
  - director
  - actors
  - 
# LAB 2: Components integration
#### starting branch: movie-app-part-01
#### ending branch:movie-app-part-02
### requirements:
- Add pass list to a component named FilmList. Pass Film content to another component named FilmItem
 
# LAB 3: Challange - Remove item
### starting branch: movie-app-part-02
### ending branch: movie-app-part-03
## requirements:
- add a button on each FilmItem that remove the item from the list being displayed

#  LAB 4: API communication
### starting branch: movie-app-part-03
### ending branch: movie-app-part-04
## requirements:
- fetch data from API - GET https://apimocha.com/lab-films/films
- display fetched data instead of mocked data

# LAB 5 : Challange Loading indicator & delete button for each item
### starting branch: movie-app-part-04
### ending branch:movie-app-part-5
## requirements:
- loading while fetching
- Update Delete Button to remove from API
  - DELETE - https://apimocha.com/moviesapi/film/:imdbID

# LAB 6 : API handling errors
### starting branch: movie-app-part-05
### ending branch:movie-app-part-06
## requirements:
- Handling errors
- Response errors
- Interact with state properties along response errors

# LAB 7 : custom Hooks
### starting branch: movie-app-part-06
### ending branch:movie-app-part-07
## requirements:
- custom hook useFetch
- create a hook that with a single url be able to:
    - Fetch the data
    - Retrieve it
    - Control the loading indicator for the fetching process
    - Handling Errors


# LAB 8 & 9 : custom Hooks
### starting branch: movie-app-part-07
### middle branch:movie-app-part-08
### ending branch:movie-app-part-09
## Requirements Middle Point:
- Add BrowserRouter in index.js
- Define Routes in App.js
## Requirements Ending Point:
- Create details page
- Navigate to URL with params
 
# LAB 10 : custom Hooks
### starting branch: movie-app-part-09
### ending branch:movie-app-part-10
## requirements:
- Add Navbar.css -> CSS Stylesheets
- Use Inline Styles in FilmItem.js
- Add FilmDetails.module.css -> CSS Modules
- Use Styled Components in FilmList.js

# LAB 11 : First Form
### starting branch: movie-app-part-10
### ending branch:movie-app-part-11
## requirements:
- Create new film form in route "/new"
- submit form and navigate to home page after creation
  - const handleSubmit = (e) => {}
  - POST fetch: https://apimocha.com/moviesapi/film/:imdbID with body
- Film object to Post = {
  imdbID: "",
  title: "",
  year: "",
  gender: "",
  director: "",
  actors: "",
  }
# LAB 12 : Forms custom inputs
### starting branch: movie-app-part-11
### ending branch:movie-app-part-12
## requirements:
- create custom select for gender
  - fetch All genders using useFetch
  - Turn gender and actors array values for multi select
  - All genders endpoint url= "https://apimocha.com/moviesapi/gender"
- create a input for actors based on react-select library
  - npm i react-select for actors
  - 
# LAB 13 : Using with Formik library Refactor to use Formik
### starting branch: movie-app-part-12
### ending branch:movie-app-part-13
## requirements:


# LAB 14 : Using with Formik Field for and data validation
### starting branch: movie-app-part-13
### ending branch:movie-app-part-14
## requirements:

# LAB 15 : Testing
### starting branch: movie-app-part-14
### ending branch:movie-app-part-15
## requirements:
- App.test.js
       1. Check component rendering after navigation to form (using click and timeout). Using getByText method.
- FilmItem.test.js
       2. Check component rendering using mock for props. Using getByText method.
- Navbar.test.js : 
       3. Testing using getByRole from React Testing Library

# LAB 16 : Context API
### starting branch: movie-app-part-15
### ending branch:movie-app-part-16
## requirements:
- Create ThemeContext : dark - light (updated in Navbar.js)

# LAB 17 : Implement security into our App
### starting branch: movie-app-part-16
### ending branch:movie-app-part-18
## requirements:
- Create a button that trigget a POST - https://apimocha.com/authentication/login"
- Store login props in a provider to be accessible to children components
- Create a button logout that reset login props
- Playlist link should only be visible for authenticated users
- Playlist Route should be protected and only be accessible to authenticated users
- Delete Film post should be called with a Bearer Token provided by logged in data

# LAB 18 : Redux
### starting branch: movie-app-part-16
### ending branch:movie-app-part-17
## requirements:
- Create new file WatchList.js (displays movies from Redux state)
- Add button WatchList in FilmList component that uses dispatch function from Redux.
- Create watchlistReducer with 2 actions : DELETE_FILM and ADD_FILM
