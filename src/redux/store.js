import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";


import extraReducer from "./reducer";

let rootReducer = combineReducers({
  extraData: extraReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
