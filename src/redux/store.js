import { createStore, compose, applyMiddleware } from "redux";
import Reducer from "./reducers/reducer";
import thunk from "redux-thunk";

const middleware = [thunk];
const store = createStore(
  Reducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
