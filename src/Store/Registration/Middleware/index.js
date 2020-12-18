import { LOGIN, SIGNUP } from "../Actions";

const Middleware = (store) => (next) => (action) => {
    switch (action.type)
    {
        case SIGNUP: {
            next(action);
            break;
        }
        case LOGIN: {

            next(action);
            break;
        }
        default: {
            next(action);
            break;
        }
    }
};

export default Middleware;