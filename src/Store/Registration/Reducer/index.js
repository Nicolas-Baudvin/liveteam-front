import { LOGIN } from "../Actions";

const initialState = {
    token: ""
};

const RegistrationReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case LOGIN: {
            return {
                ...state,
                token: action.token
            };
        }
        default: {
            return state;
        }
    }
};

export default RegistrationReducer;