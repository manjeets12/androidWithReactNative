/* global __DEV__:true*/
/* eslint no-undef: "error"*/

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'app/reducers';
import rootSaga from 'app/sagas';

// creates the store
const configureStore = () => {
   /* ------------- Redux Configuration ------------- */
  const middleWares = [];

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware()
  middleWares.push(sagaMiddleware);

  const store = createStore(rootReducer, applyMiddleware(...middleWares));
  // kick off root saga
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
