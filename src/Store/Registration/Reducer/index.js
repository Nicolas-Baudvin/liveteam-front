import { LOGIN, LOGOUT, SIGNUP } from "../Actions";

const initialState = {
    token: ""
};

const RegistrationReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case LOGIN: {
            return {
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default RegistrationReducer;