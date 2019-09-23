import { combineReducers, createStore, applyMiddleware } from 'redux';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import {titleReducer as title, getTitleSaga} from './duck'

const rootReducer = combineReducers({
  title
});

export const rootSaga = function* rootSaga() {
  yield all([
    ...getTitleSaga,
  ]);
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;