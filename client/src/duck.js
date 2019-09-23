import { fork, put, call, takeLatest } from 'redux-saga/effects';
import { callApi, createAction, createReducer } from './dorothy/utils';

export const GET_OAUTH_REQUEST = 'GET_OAUTH_REQUEST';
export const GET_OAUTH_RESPONSE = 'GET_OAUTH_RESPONSE';

function* requestTitle(action) { // action: {type: '', payload: ''}
    try {
        const response = yield call(
            callApi,
            'POST',
            'http://localhost:3001/oauth/google',
            {access_token: action.payload.accessToken}
        );
        if(response){
            console.log(response);
        }  
    } catch (error) {
        console.log(error);
    }
}
function* titleRequest() {
  yield takeLatest(GET_OAUTH_REQUEST, requestTitle);
}

const initTitle = null;
const titleActionHandler = {
  [GET_OAUTH_RESPONSE]: (state, action) => action.payload,
};

export const titleReducer = createReducer(initTitle, titleActionHandler);
export const getTitleSaga = [fork(titleRequest)];


export const GET_OAUTH_FB_REQUEST = 'GET_OAUTH_FB_REQUEST';
export const GET_OAUTH_FB_RESPONSE = 'GET_OAUTH_FB_RESPONSE';




function* requestTitle1(action) { // action: {type: '', payload: ''}
    try {
        const response = yield call(
            callApi,
            'POST',
            'http://localhost:3001/oauth/facebook',
            {access_token: action.payload.accessToken}
        );
        if(response){
            console.log(response);
        }  
    } catch (error) {
        console.log(error);
    }
}
function* titleRequest1() {
  yield takeLatest(GET_OAUTH_FB_REQUEST, requestTitle1);
}

const initTitle1 = null;
const titleActionHandler1 = {
  [GET_OAUTH_FB_RESPONSE]: (state, action) => action.payload,
};

export const fbReducer = createReducer(initTitle1, titleActionHandler1);
export const fbSaga = [fork(titleRequest1)];