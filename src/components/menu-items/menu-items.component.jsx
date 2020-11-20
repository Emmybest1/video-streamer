import React from "react";
import { NavLink } from "react-router-dom";

import "./menu-items.style.scss";

const MenuItems = () => {
    return (
        <div className="container menu-items-container" id="menu-items-container">
            <ul role="menu">
                <li role="menuitem">
                    <NavLink to="/movies/?type=action" data-test="actionMoviesLink" className="anchor">
                        Action movies
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies/?type=tv-show" data-test="tvShowsLink" className="anchor">
                        Tv shows
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies/?type=comedy" data-test="comediesLink" className="anchor">
                        Comedies
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MenuItems;
