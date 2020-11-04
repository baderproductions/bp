import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducersDucks from "./ducks";

const reducer = combineReducers(reducersDucks);
let store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export { store };
