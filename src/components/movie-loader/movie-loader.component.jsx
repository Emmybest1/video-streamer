import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//redux action
import { fetchMovieRequest } from "../../redux/root.actions";
import { getUrlSearchParam } from "../../utils/search-params";

import Button from "../../components/button/button.component";
import Iframe from "../iframe/iframe.component";
import "./movie-loader-style.scss";

const MovieLoader = (props) => {
    const movie = useSelector((state) => state.movie.movie);
    const dispatch = useDispatch();
    const idParam = getUrlSearchParam(props.location.search, "id");

    useEffect(() => {
        let isMounted = true;
        if (isMounted) dispatch(fetchMovieRequest(idParam));

        return () => {
            isMounted = false;
        };
    }, [dispatch, idParam]);

    console.log(movie);

    return (
        <div className="container movie-loader-container">
            <ul>
                {movie.map((mov) => (
                    <li key={mov.id}>
                        <section>
                            <Iframe src={mov.url} title={mov.title} />
                            <h3 className="title">{mov.title}</h3>
                            <p className="lang-type">
                                {mov.language} | <span>{mov.type} movie|</span>
                            </p>
                            <p>
                                <time className="qua-time">
                                    {mov["running-time"]} {mov.quality}
                                </time>
                            </p>
                            <p className="desc">{mov.description}</p>
                        </section>
                    </li>
                ))}
            </ul>

            <Button className="go-home" data-test="goHomeBtn" buttonText="Go Home" onClick={() => props.history.push("/")} />
        </div>
    );
};

export default withRouter(MovieLoader);
