import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import {persistConfig} from './config';

import {loader, homeItems} from './reducers';
import rootSaga from './sagas';

export default () => {
  const rootReducer = combineReducers({
    loader,
    homeItems,
  });

  const middleware = [];
  const enhancers = [];

  if (__DEV__) {
    middleware.push(createLogger({collapsed: true}));
  }

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware({});
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, compose(...enhancers));
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return {
    store,
    persistor,
  };
};
