import React, { useState } from "react";
import { useDispatch } from "react-redux";
//custom hooks
import { useUniqueIds } from "../../hooks/useUniqueIds";
//redux action
import { postEmailSubscriptionRequest } from "../../redux/root.actions";
import Input from "../input/input.component";
import "./subscribe.style.scss";

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [emailId, submitBtnId] = useUniqueIds(2);
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(postEmailSubscriptionRequest({ email: email }));
        setEmail("");
    };
    return (
        <form onSubmit={onSubmitHandler} data-test="subscribeForm">
            <Input type="email" id={emailId} labelText="" name="email" data-test="subscribeEmail" placeholder="YOUR EMAIL" value={email} onChange={onChangeHandler} required />
            <Input type="submit" value="Subscribe Now" id={submitBtnId} data-test="emailSubscribeBtn" labelText="" name="submitBtn" />
        </form>
    );
};

export default Subscribe;
