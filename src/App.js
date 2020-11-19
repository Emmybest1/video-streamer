import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./structures/header/header.component";
import Footer from "./structures/footer/footer.component";
import HomePage from "./pages/home/home.component";
import Movies from "./pages/movies/movies.component";
import Movie from "./pages/movie/movie.component";
import ErrorBoundary from "./structures/error-boundary/error-boundary.component";
import NotFound from "./structures/not-found/not-found.component";
import "./app.style.scss";

const App = () => {
    return (
        <>
            <a href="#main">Skip to main content</a>
            <Router>
                <ErrorBoundary>
                    <Header />
                    <Suspense fallback={<p>Loading...</p>}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/movies/" component={Movies} />
                            <Route exact path="/movie/" component={Movie} />
                            <Route component={NotFound} />
                        </Switch>
                    </Suspense>
                    <Footer />
                </ErrorBoundary>
            </Router>
        </>
    );
};

export default App;
