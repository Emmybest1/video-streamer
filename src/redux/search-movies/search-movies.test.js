import { types } from "./search-movies.types";
import { initialState, reducer } from "./search-movies.reducer";

describe("search movies redux test", () => {
    it("should test the search movies reducer", () => {
        const searchMoviesReducer = reducer("Action Movie", types.SEARCH_A_MOVIE);

        expect(searchMoviesReducer).toEqual("Action Movie");
    });
});
