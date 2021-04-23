import { combineReducers, compose, createStore } from 'redux';
// Reducers
import { discoverReducer } from './reducer';

const configureReducer = () =>
    combineReducers({
        discover: discoverReducer,
    });

export default function store() {
    const composeEnhancers =
        typeof window === 'object' &&
            (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    const enhancer = composeEnhancers(
        // other store enhancers if any
    );

    const store = createStore(configureReducer(), enhancer);
    return store;
}
