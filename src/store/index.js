import { createStore, compose, applyMiddleware } from "redux";

import reducers from "./ducks";

const store = createStore(reducers);

export default store;
