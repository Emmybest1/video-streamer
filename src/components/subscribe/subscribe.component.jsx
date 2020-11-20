import React, { useState } from "react";

import { useUniqueIds } from "../../hooks/useUniqueIds";
import Input from "../input/input.component";
import "./subscribe.style.scss";

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [emailId, submitBtnId] = useUniqueIds(2);

    const onChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail("");
        //redux action here
    };
    return (
        <form onSubmit={onSubmitHandler} data-test="subscribeForm">
            <Input type="email" id={emailId} labelText="" name="email" data-test="subscribeEmail" placeholder="YOUR EMAIL" value={email} onChange={onChangeHandler} required />
            <Input type="submit" value="Subscribe Now" id={submitBtnId} data-test="emailSubscribeBtn" labelText="" name="submitBtn" />
        </form>
    );
};

export default Subscribe;
