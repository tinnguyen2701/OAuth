import { combineReducers, createStore, applyMiddleware } from 'redux';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import {titleReducer as title, getTitleSaga, fbReducer, fbSaga} from './duck'

const rootReducer = combineReducers({
  title,
  fbReducer
});

export const rootSaga = function* rootSaga() {
  yield all([
    ...getTitleSaga,
    ...fbSaga
  ]);
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;