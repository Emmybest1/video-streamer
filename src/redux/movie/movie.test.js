import { types } from "./movie.types";
import { initialState, reducer } from "./movie.reducer";

describe("movie redux test", () => {
    it("should test the movie reducer", () => {
        const movieReducer = reducer(initialState, types.FETCH_MOVIE_REQUEST);

        expect(movieReducer).toEqual(initialState);
    });
});
