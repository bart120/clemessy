import { AUTH_LOGON, AUTH_LOGOUT } from "../actions/authentication-actions";

const INITIAL_STATE = {
    user: null,
    isConnected: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_LOGON:
            return { isConnected: true, user: action.payload };
        case AUTH_LOGOUT:
            return { isConnected: false, user: null };
        default:
            return state;
    }

};