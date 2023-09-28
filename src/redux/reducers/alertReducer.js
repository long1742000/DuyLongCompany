const alertReducer = (state = '', action) => {
    switch (action.type) {
        case 'turnOn':
            return action.payload;
        case 'turnOff':
            return action.payload;
        default:
            return state;
    }
}

export default alertReducer;