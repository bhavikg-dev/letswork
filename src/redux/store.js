import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "redux/reducers";
import appConfig from "config/config";

const middleware = [thunk];

if (appConfig.environment === "local") {
  middleware.push(logger);
}

const defaultStore = createStore(rootReducer, applyMiddleware(...middleware));

export default defaultStore;
