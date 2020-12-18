import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

/**
 * Middlewares
 */
import RegistrationMw from './Registration/Middleware';

const middlewares = applyMiddleware(RegistrationMw);

const withReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reactModelStore = createStore(
    reducers,
    process.env.NODE_ENV === "development" ? withReduxDevTools(middlewares) : middlewares
);

export default reactModelStore;