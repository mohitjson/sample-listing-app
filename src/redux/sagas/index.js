import {all, takeEvery} from 'redux-saga/effects';
import * as Types from '../actions/actionsTypes';
import {homeItems} from './homeItems';

export default function* rootSaga() {
    yield all([
        takeEvery(Types.HOME_ITEMS, homeItems),   
    ]);
  }