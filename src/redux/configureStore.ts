import {combineReducers, createStore, applyMiddleware,} from 'redux';
import {composeWithDevTools,} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducersDucks from './ducks';

const reducer = combineReducers(reducersDucks);
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export {store,};
