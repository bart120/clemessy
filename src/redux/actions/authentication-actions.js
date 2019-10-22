export const AUTH_LOGON = 'AUTH_LOGON';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const logon = (payload) => ({
    type: AUTH_LOGON,
    payload
});

export const logout = (payload) => ({
    type: AUTH_LOGOUT,
    payload
});