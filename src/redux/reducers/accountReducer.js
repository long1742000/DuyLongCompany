const accountReducer = (state = {}, action) => {
    switch (action.type) {
        case 'login':
            localStorage.setItem('user', JSON.stringify(action.payload));
            return action.payload;
        case 'logout':
            localStorage.removeItem('user');
            return {};
        default:
            return state;
    }
}

export default accountReducer;