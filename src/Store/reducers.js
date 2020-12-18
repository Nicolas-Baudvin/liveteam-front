import { combineReducers } from 'redux';
import { LOGOUT } from './Registration/Actions';
import RegistrationReducer from './Registration/Reducer';

const appReducer = combineReducers({
    user: RegistrationReducer
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT)
    {
        state = {};
    }
    return appReducer(state, action);
};

export default rootReducer;