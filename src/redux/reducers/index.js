import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import toastReducer from "./toastReducer";
import alertReducer from "./alertReducer";

// Reducer contain all child reducers
const rootReducer = combineReducers({
    account: accountReducer,
    toast: toastReducer,
    alert: alertReducer,
})

export default rootReducer;