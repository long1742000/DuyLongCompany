import Icon from "../data/icon";
import { done, report } from "../redux/actions/toastAction";
import store from "../redux/store/store";

export const click = (icon, mess) => {
    // Turn on toast when user do something
    store.dispatch(report(icon, mess));

    // Turn off toast when used it
    setTimeout(() => {
        store.dispatch(done());
    }, 3000)
}