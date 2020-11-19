import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

//redux action importation
import { fetchMoviesRequest } from "../../redux/root.actions";
import { getUrlSearchParam } from "../../utils/search-params";
import Image from "../image/image.component";
import "./movies-loader.style.scss";

const MoviesLoader = (props) => {
    const movies = useSelector((state) => state.movies.movies);
    const searchedMovie = useSelector((state) => state.searchedMovie.searchedMovie);
    const dispatch = useDispatch();

    //get the type search parameter
    const movieType = getUrlSearchParam(props.location.search, "type");

    useEffect(() => {
        let isMounted = true;
        if (isMounted === true) dispatch(fetchMoviesRequest(movieType));

        return () => {
            isMounted = false;
        };
    }, [dispatch, movieType, searchedMovie]);

    return (
        <div className="container movies-loader-container">
            <ul>
                {!searchedMovie.length
                    ? movies.map((movie) => (
                          <li key={movie.id}>
                              <Link to={`/movie/?id=${movie.id}`} data-test="moviePoster">
                                  <section>
                                      <Image src={movie.poster} />
                                      <p>{movie.title}</p>
                                  </section>
                              </Link>
                          </li>
                      ))
                    : movies
                          .filter((movie) => movie.title.toLowerCase() === searchedMovie.toLowerCase() || movie.title.toLowerCase().includes(searchedMovie.toLowerCase()))
                          .map((movie) => (
                              <li key={movie.id.toString()}>
                                  <Link to={`/movie/?id=${movie.id}`}>
                                      <section>
                                          <Image src={movie.poster} />
                                          <p>{movie.title}</p>
                                      </section>
                                  </Link>
                              </li>
                          ))}
            </ul>
        </div>
    );
};

export default withRouter(MoviesLoader);
