import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware({
  onError(error) {
    setImmediate(() => {
      throw error;
    });
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export { store };
