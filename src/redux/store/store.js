import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import { LoginMiddleware } from "../middlewares/loginMiddleware";

const middleware = applyMiddleware(LoginMiddleware);

const store = createStore(rootReducer, middleware);

store.subscribe(() => {
    console.log('user: ', store.getState());    // console.log redux state when it changes
});

export default store;