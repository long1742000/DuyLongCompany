import { logout } from "../redux/actions/accountAction"
import store from "../redux/store/store"

// list controller
export const listController = (controller) => {
    switch (controller) {
        case 'logout':
            store.dispatch(logout());
    }
}