import { getMovie } from "../../utils/modules/https";
import { types } from "./movie.types";

const fetchMovieSuccess = (payload) => ({
    type: types.FETCH_MOVIE_SUCCESS,
    payload,
});

const fetchMovieFailure = (payload) => ({
    type: types.FETCH_MOVIE_FAILURE,
    payload,
});

export const fetchMovieRequest = (payload) => (dispatch) => {
    getMovie("http://localhost:5000/movies", payload)
        .then((response) => dispatch(fetchMovieSuccess(response.data)))
        .catch((error) => {
            dispatch(fetchMovieFailure(error.message));
            console.error(error.message);
        });
};
