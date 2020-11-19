import React from "react";
import { withRouter } from "react-router-dom";

import MovieLoader from "../../components/movie-loader/movie-loader.component";
import "./movie.style.scss";

const Movie = (props) => {
    return (
        <>
            <MovieLoader />
        </>
    );
};

export default withRouter(Movie);
