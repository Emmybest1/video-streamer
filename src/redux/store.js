import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./root.reducer";

const middlerwares = [reduxThunk];
process.env.NODE_ENV === "development" && middlerwares.push(logger);

const composeEhancers = composeWithDevTools({ name: `Redux`, realtime: true, trace: true, traceLimit: 25 });
export const store = createStore(rootReducer, composeEhancers(applyMiddleware(...middlerwares)));
