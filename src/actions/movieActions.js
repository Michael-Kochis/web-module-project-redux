export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";

export const addMovie = (content) => {
    const neoID = 2323;
    const neoMovie = {
        ...content,
        id: neoID
    }
    return({type: ADD_MOVIE, payload: neoMovie});
}

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}