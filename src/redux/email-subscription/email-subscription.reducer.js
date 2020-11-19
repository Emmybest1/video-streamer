import { types } from "./email-subscription.types";

export const initialState = {
    isLoading: true,
    error: null,
    email: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.POST_EMAIL_SUBSCRIPTION_REQUEST:
            return { ...state, isLoading: true };

        case types.POST_EMAIL_SUBSCRIPTION_SUCCESS:
            return { ...state, isLoading: false, email: action.payload };

        case types.POST_EMAIL_SUBSCRIPTION_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
