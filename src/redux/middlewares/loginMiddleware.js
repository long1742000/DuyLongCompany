export const LoginMiddleware = (store) => (next) => (action) => {
    if (action.type === 'logout') {
        window.location.reload();
    }

    return next(action);
}