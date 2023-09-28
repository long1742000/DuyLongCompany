import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import { LoggingMiddleware } from "../middlewares/loggingMiddleware";

const middlewareEnhancer = applyMiddleware(LoggingMiddleware)

const store = createStore(rootReducer, middlewareEnhancer);

export default store;