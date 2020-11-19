import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useUniqueIds } from "../../hooks/useUniqueIds";
//redux action
import { searchAMovie } from "../../redux/root.actions";
import Input from "../input/input.component";
import "./searchbar.style.scss";

const Searchbar = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const [searchbarId, submitId] = useUniqueIds(2);
    const dispatch = useDispatch();
    let isMounted = true;

    const onChangeHandler = (e) => {
        setSearchMovie(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (isMounted) dispatch(searchAMovie(searchMovie));
    };
    return (
        <form className="container searchbar-container" onSubmit={onSubmitHandler}>
            <Input type="search" id={searchbarId} labelText="" placeholder="Search Movie Name" value={searchMovie} onChange={onChangeHandler} />
            <Input type="submit" value="Search" id={submitId} labelText="" />
        </form>
    );
};

export default Searchbar;
