import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import fakeSocketMiddleware from "../middleware/fakeSocket";
import quotes from "../reducers/quotes";
import tiles from "../reducers/tiles";

const middlewares = [thunkMiddleware, fakeSocketMiddleware];
const rootReducer = combineReducers({ quotes, tiles });
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };
