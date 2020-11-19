import { act } from "react-dom/test-utils";
import { types } from "./search-movies.types";

const initialState = {
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
