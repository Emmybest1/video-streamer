import { types } from "./movie.types";

export const initialState = {
    isLoading: true,
    error: null,
    movie: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_MOVIE_REQUEST:
            return { ...state, isLoading: true };

        case types.FETCH_MOVIE_SUCCESS:
            return { ...state, isLoading: false, movie: action.payload };

        case types.FETCH_MOVIE_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
