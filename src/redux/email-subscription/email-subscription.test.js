import { initialState, reducer } from "./email-subscription.reducer";
import { types } from "./email-subscription.types";

describe("email subscription redux test", () => {
    it("should test the reducer", () => {
        const emailSubReducer = reducer(initialState, types.POST_EMAIL_SUBSCRIPTION_REQUEST);
        expect(emailSubReducer).toEqual(initialState);
    });
});
