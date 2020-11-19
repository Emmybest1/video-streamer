import React from "react";

import Main from "../../structures/main/main.component";
import Image from "../../components/image/image.component";
import SearchBar from "../../components/searchbar/searchbar.component";
import MoviesLoader from "../../components/movies-loader/movies-loader.component";
import "./movies.style.scss";

const Movies = () => {
    return (
        <Main>
            <div className="movies-bg" style={$backgroundImageStyle}></div>
            <div className="movies-container">
                {/* <Image src={`/assets/images/action-bg.jpg`} className="movies-bg" /> */}
                <SearchBar />
                <MoviesLoader />
            </div>
        </Main>
    );
};

const $backgroundImageStyle = {
    backgroundImage: `url(/assets/images/action-bg.jpg)`,
};

export default Movies;
