import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import MenuItems from "../../components/menu-items/menu-items.component";
import "./header.style.scss";

const Header = () => {
    const [isMenuIconCLicked, setIsMenuIconCLicked] = useState(false);
    return (
        <header className="container">
            <nav>
                <ul className="display-flex">
                    <li>
                        <NavLink to="/" className="logo" data-test="logo">
                            MOVIES ABLOY
                        </NavLink>
                    </li>
                    <li className="menu-icon" data-test="menuIconBtn" onClick={() => (isMenuIconCLicked ? setIsMenuIconCLicked(false) : setIsMenuIconCLicked(true))}>
                        <span className="top"></span>
                        <span className="middle"></span>
                        <span className="bottom"></span>
                    </li>
                </ul>
            </nav>

            {isMenuIconCLicked && <MenuItems />}
        </header>
    );
};

export default Header;
