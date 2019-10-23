import { AUTH_LOGON, AUTH_LOGOUT } from "../actions/authentication-actions";

const USERSTORAGE = 'USER';

const INITIAL_STATE = {
    user: JSON.parse(sessionStorage.getItem(USERSTORAGE)),
    isConnected: sessionStorage.getItem(USERSTORAGE) != null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_LOGON:
            sessionStorage.setItem(USERSTORAGE, JSON.stringify(action.payload));
            return { isConnected: true, user: action.payload };
        case AUTH_LOGOUT:
            sessionStorage.removeItem(USERSTORAGE);
            return { isConnected: false, user: null };
        default:
            return state;
    }

};