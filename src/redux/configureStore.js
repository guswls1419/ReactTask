import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import api from "./modules/api";

//rootReducer
const rootReducer = combineReducers({
  api:api,
});


const middlewares = [thunk];  

const env = process.env.NODE_ENV;

if (env === "development") { 
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

//rddux devTools설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__//REDUX_DEVTOOLS가 깔려있냐는말
  
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

    // 미들웨어 묶어주기
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    let store = (initialStore) => createStore(rootReducer, enhancer);
    export default store();
