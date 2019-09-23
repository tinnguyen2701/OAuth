import { fork, put, call, takeLatest } from 'redux-saga/effects';
import { callApi, createAction, createReducer } from './dorothy/utils';

export const GET_TITLE_REQUEST = 'GET_TITLE_REQUEST';
export const GET_TITLE_RESPONSE = 'GET_TITLE_RESPONSE';

function* requestTitle(action) { // action: {type: '', payload: ''}
    try {
        const response = yield call(
            callApi,
            'GET',
            'http://localhost:3001/test',
        );
        if(response){
            console.log(response);
        }  
    } catch (error) {
        console.log(error);
    }
}
function* titleRequest() {
  yield takeLatest(GET_TITLE_REQUEST, requestTitle);
}

const initTitle = null;
const titleActionHandler = {
  [GET_TITLE_RESPONSE]: (state, action) => action.payload,
};

export const titleReducer = createReducer(initTitle, titleActionHandler);
export const getTitleSaga = [fork(titleRequest)];