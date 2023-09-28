export const LoggingMiddleware = (store) => (next) => (action) => {
    console.log("Action >>> ", action);
    let result = next(action);

    return result;
}