import { combineReducers } from "redux";

import { reducer as movieReducer } from "./movie/movie.reducer";
import { reducer as moviesReducer } from "./movies/movies.reducer";
import { reducer as emailSubscriptionReducer } from "./email-subscription/email-subscription.reducer";
import { reducer as searchMovieReducer } from "./search-movies/search-movies.reducer";

export const rootReducer = combineReducers({
    movie: movieReducer,
    movies: moviesReducer,
    emailSubscription: emailSubscriptionReducer,
    searchedMovie: searchMovieReducer,
});
