import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  return createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
  );
}
