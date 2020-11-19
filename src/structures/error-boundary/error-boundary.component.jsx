import React, { Component } from "react";

import Main from "../main/main.component";
import Image from "../../components/image/image.component";
import "./error-boundary.style.scss";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError(error) {
        console.group("Broken Page Trace");
        console.error(error);
        console.groupEnd();
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <Main className="container error-boundary-container">
                    <Image src={`/assets/images/error-boundary-bg.png`} />
                    <p>
                        OOPS....
                        <br />
                        Broken Page 💔
                    </p>
                </Main>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
