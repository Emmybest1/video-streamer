import React from "react";

import Main from "../../structures/main/main.component";
import Subscribe from "../../components/subscribe/subscribe.component";
import "./home.style.scss";

const HomePage = () => {
    return (
        <Main>
            <div className="container home-page-container" style={$backgroundImageStyle}>
                <div className="center-text">
                    <p>Coming December 20</p>
                    <h1>THE WITCHER</h1>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam voluptatum voluptate quibusdam quis velit vero excepturi alias ea, expedita recusandae aliquam sapiente ex modi</p>
                <Subscribe />
            </div>
            <div className="overlay-bg"></div>
        </Main>
    );
};

const $backgroundImageStyle = {
    backgroundImage: `url(/assets/images/home-bg.jpg)`,
};

export default HomePage;
