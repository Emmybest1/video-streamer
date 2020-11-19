import { types } from "./search-movies.types";

export const initialState = {
    searchedMovie: "",
};

export const reducer = (state = initialState, acttion) => {
    switch (acttion.type) {
        case types.SEARCH_A_MOVIE:
            return { ...state, searchedMovie: acttion.payload };

        default:
            return state;
    }
};
