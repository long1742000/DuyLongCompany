import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import { LoginMiddleware } from "../middlewares/loginMiddleware";
import { LoggingMiddleware } from "../middlewares/loggingMiddleware";

const middlewareEnhancer = applyMiddleware(LoginMiddleware, LoggingMiddleware)

const store = createStore(rootReducer, middlewareEnhancer);

store.subscribe(() => {
    console.log('Redux state: ', store.getState());    // console.log redux state when it changes
});

export default store;