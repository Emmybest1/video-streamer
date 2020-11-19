import { types } from "./movies.types";
import { initialState, reducer } from "./movies.reducer";

describe("movies redux test", () => {
    it("should test the movies reducer", () => {
        const moviesReducer = reducer(initialState, types.FETCH_MOVIES_REQUEST);

        expect(moviesReducer).toEqual(initialState);
    });
});
