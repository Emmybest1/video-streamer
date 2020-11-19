import { post } from "../../utils/modules/https";
import { types } from "./email-subscription.types";

const postEmailSubscriptionSuccess = (payload) => ({ type: types.POST_EMAIL_SUBSCRIPTION_SUCCESS, payload });
const postEmailSubscriptionFailure = (payload) => ({ type: types.POST_EMAIL_SUBSCRIPTION_FAILURE, payload });

export const postEmailSubscriptionRequest = (payload) => (dispatch) => {
    post("http://localhost:5000/email-subscriptions", payload)
        .then((response) => {
            dispatch(postEmailSubscriptionSuccess(response.data));
        })
        .catch((error) => {
            dispatch(postEmailSubscriptionFailure(error.message));
            console.error(error.message);
        });
};
