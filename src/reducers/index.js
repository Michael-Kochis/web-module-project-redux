import { combineReducers } from 'redux';

import favoritesReducer from './favoritesReducer'
import movieReducer from './movieReducer';

const mainReducer = combineReducers({
    favorite: favoritesReducer,
    movie: movieReducer
});

export default mainReducer;