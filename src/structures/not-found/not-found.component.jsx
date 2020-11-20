import React, { useEffect } from "react";

import Main from "../main/main.component";
import Button from "../../components/button/button.component";
import Image from "../../components/image/image.component";
import "./not-found.style.scss";

const NotFound = (props) => {
    useEffect(() => {
        let redirect;
        redirect = setTimeout(() => {
            props.history.push("/");
        }, 3000);

        return () => clearTimeout(redirect);
    }, [props.history]);

    return (
        <Main>
            <div className="container not-found-container">
                <Image src={`/assets/images/not-found.png`} />
                <h3>Page Not Found!!!</h3>
                <Button className="go-home" buttonText="Go Home" onClick={() => props.history.push("/")} />
            </div>
        </Main>
    );
};

export default NotFound;
