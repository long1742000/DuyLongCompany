export const LoginMiddleware = (store) => (next) => (action) => {
    if (action.type === 'logout') {

    }

    return next(action);
}