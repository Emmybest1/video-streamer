import { types } from "./search-movies.types";

export const searchAMovie = (payload) => ({
    type: types.SEARCH_A_MOVIE,
    payload,
});
