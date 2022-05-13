# movie-app

## Code management flow

- Each Lab has its own feature branch.
- main branch should have final version
- In case of the need to update content from an "middle" branch, the updates must be done and pulled to all subsequent branches up until the main
- If you work in current last completed iteration, pull the code up until the main

## Features

### Part 1: list

#### Requirements:

- List a collection of films
- films object:
  - id
  - title
  - year
  - genre
  - director
  - actors

### Part 2: components interaction

#### Requirements

- Pass the collection to a component named FilmList. Pass Film content to another component named FilmItem

### Part 3: remove item

#### Requirements

- add a button on each FilmItem that remove the item from the list being displayed

### Part 4: API communication

#### Requirements

- Connect to Api mocha - https://apimocha.com/moviesapi/film
- Fetch data
- Conditional render filmList if films are still not fetched

### Part 5: API Post & loading

#### Requirements

- loading while fetching
- Update Delete Button to remove from API

### Part 6: API handling errors

#### Requirements

- Handling errors
- Response errors
- Interact with state properties along response errors

### Part 7: API handling errors improved with custom hooks

#### Requirements

- Handling errors
- Create useFetch component

### Part 8: React Routing

#### Requirements

- Routes & routes
- Route match
- Link
- BrowserRouter

### Part 09: React Route Parameters

#### Requirements

- add button to each movie named "details"
- add a new details component that is displayed in a new route "/film/:id"

### Part 10: Styling app

#### Requirements

...

### Part 11: Forms

#### Requirements

- Create new film form in route "/new"
- navigate to home page after creation
  ...

### Part 12: Forms advanced

#### Requirements

...

### Part 13: Rect tests

#### Requirements

...

### Part 14: Use Context

#### Requirements

...

### Part 15: Redux

#### Requirements

...

### Part 16: Security

#### Requirements

...
