import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movies: [
                    ...movies,
                    action.payload
                ]
            }
        case DELETE_MOVIE:
            const target = parseInt(action.payload);

            return {
                movies: state.movies.filter(item=>(target !== item.id))
            }
        default:
            return state;
    }
}

export default reducer;