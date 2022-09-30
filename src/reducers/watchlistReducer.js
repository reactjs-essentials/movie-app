
    
const initialState = {films : []}

 const watchlistReducer = (state = initialState, action) => {


    switch(action.type) {
         
        case "ADD_FILM":
            console.log(state.films)
            if (!state.films?.filter(film => film.title === action.item.title).length > 0) {
                return { films: [...state.films, action.item] };
            } else {
                return state 
            }

         
        case "DELETE_FILM": 

        return {
            ...state,
            films: state.films?.filter((film) => film.title !== action.item.title)
          }
 
        default:
            return state;
    }
     
}
export default watchlistReducer;
