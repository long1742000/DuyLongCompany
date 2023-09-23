import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log('user: ', store.getState());    // console.log redux state when it changes
});

export default store;