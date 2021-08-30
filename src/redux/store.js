import { createStore } from "redux";

import { basketReducer } from "./reducers";

export const store = createStore(basketReducer);
