const request = () => {
    return {
        type: 'request',
        payload: '',
    }
}

const login = (account) => {
    return {
        type: 'login',
        payload: account,
    }
}
const logout = (account) => {
    return {
        type: 'logout',
        payload: account,
    }
}

export { request, login, logout };