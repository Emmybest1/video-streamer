import { getMovies } from "../../utils/modules/https";
import { types } from "./movies.types";

const fetchMoviesSuccess = (payload) => ({
    type: types.FETCH_MOVIES_SUCCESS,
    payload,
});

const fetchMoviesFailure = (payload) => ({
    type: types.FETCH_MOVIES_FAILURE,
    payload,
});

export const fetchMoviesRequest = (payload) => (dispatch) => {
    getMovies("http://localhost:5000/movies", payload)
        .then((response) => dispatch(fetchMoviesSuccess(response.data)))
        .catch((error) => {
            dispatch(fetchMoviesFailure(error.message));
            console.error(error.message);
        });
};
