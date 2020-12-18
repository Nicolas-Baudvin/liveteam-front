export const LOGOUT = "registration/LOGOUT";
export const LOGIN = "registration/LOGIN";
export const SIGNUP = "registration/SIGNUP";

export const logout = () => ({
    type: LOGOUT
});

/**
 * @description Should contain password and username
 * @param {Object} userCredentials { username: String, password: String }
 */
export const login = (userCredentials) => ({
    type: LOGIN,
    userCredentials
});

/**
 * @description Should contain password, username, email, confirmation password.
 * @param {Object} userCredentials { username: String, password: String, Email: String, confPass: String }
 */
export const signup = (userCredentials) => ({
    type: SIGNUP,
    userCredentials
});

