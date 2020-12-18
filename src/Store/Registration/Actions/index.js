export const LOGOUT = "registration/LOGOUT";
export const LOGIN = "registration/LOGIN";
export const SIGNUP = "registration/SIGNUP";

export const logOut = () => ({
    type: LOGOUT
});

/**
 * @description Should contain password and username
 * @param {Object} payload { username: String, password: String }
 */
export const login = (payload) => ({
    type: LOGIN,
    ...payload
});

/**
 * @description Should contain password, username, email, confirmation password.
 * @param {Object} payload { username: String, password: String, Email: String, confPass: String }
 */
export const signup = (payload) => ({
    type: SIGNUP,
    ...payload
});

