import { types } from "./movies.types";

const initialState = {
    isLoading: true,
    error: null,
    movies: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_MOVIES_REQUEST:
            return { ...state, isLoading: true };

        case types.FETCH_MOVIES_SUCCESS:
            return { ...state, isLoading: false, movies: action.payload };

        case types.FETCH_MOVIES_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
