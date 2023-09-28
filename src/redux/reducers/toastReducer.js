const toastReducer = (state = '', action) => {
    switch (action.type) {
        case 'report':
            return action.payload;
        case 'done':
            return action.payload;
        default:
            return state;
    }
}

export default toastReducer;