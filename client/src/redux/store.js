import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
);

// sagaMiddleware.run(watchActions);
export default store;
