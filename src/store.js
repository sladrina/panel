import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function configureStore(initialState = {}) {
    return createStore(() => ({}), initialState, composeEnhancers(applyMiddleware(thunk)));
}
