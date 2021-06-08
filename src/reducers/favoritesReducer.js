import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITE } from '../actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            const neoFavorites = [...state.favorites, action.payload];
 
            return ({
                ...state,
                favorites: neoFavorites
            })
        case REMOVE_FAVORITE:
            const target = parseInt(action.payload);
    
            return {
                ...state,
                favorites: state.favorites.filter(item=>(target !== item.id))
            }
        case TOGGLE_FAVORITE:
            const neoState = !state.displayFavorites;
            return ({ 
                ...state,
                displayFavorites: neoState
            })
        default:
            return state;
    }
}

export default reducer;