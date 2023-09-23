import { account } from "../data/account";

// Check user login function
export const checkLogin = () => {
    if (localStorage.getItem('user')                        // If localStorage name "user" !== null
        && localStorage.getItem('user') !== ''              // and localStorage name "user" !== empty
        && localStorage.getItem('user') !== 'undefined') {  // and localStorage name "user" !== undefined => logged   
        return true;
    }
    else {
        return false;
    }
}

// Check account exist function
export const checkAccount = (acc) => {
    for (let i = 0; i < account.length; i++) {
        if (acc.username === account[i].username && acc.password === account[i].password) {
            return account[i];
        }
    }
    return false;
}