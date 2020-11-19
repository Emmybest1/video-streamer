import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./menu-items.style.scss";

const MenuItems = () => {
    const [hideMenuItems, setHideMenuItems] = useState(true);

    return (
        hideMenuItems && (
            <div className="container menu-items-container" id="menu-items-container">
                <div className="cancel-btn-wrapper" data-test="closeMenuItemsBtn" onClick={() => setHideMenuItems(false)}>
                    <i className="fa fa-times"></i>
                </div>
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
        )
    );
};

export default MenuItems;
