export const LoggingMiddleware = (store) => (next) => (action) => {
    console.log("Action >>> ", action);
    let result = next(action);
    console.log('Redux state: ', store.getState());

    return result;
}