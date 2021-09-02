import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import auth from "./AuthReducer";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(),
    // other store enhancers if any
);

const reducers = combineReducers({
    auth: auth,
})


const store = createStore(reducers, enhancer);

export default store;