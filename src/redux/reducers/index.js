import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

// Reducer contain all child reducers
const rootReducer = combineReducers({
    account: accountReducer,
})

export default rootReducer;