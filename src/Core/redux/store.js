import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer, rootSaga } from "Core/redux";

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  
  /**
   * Add new middleware here
   */
  const middlewares = [sagaMiddleware];

  const reduxStore = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);
  return reduxStore;
}

const store = configureStore();
export default store;
