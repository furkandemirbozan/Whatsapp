import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from 'redux-thunk';
import { userReducer } from "./reducers/userReducer";



let initialState = {};

let reducer = combineReducers({
    user: userReducer
});

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;