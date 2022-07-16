import {put} from 'redux-saga/effects';
import axios from 'axios';
import ApiConfig from '../../core/config';

import {
  HOME_ITEMS_RESPONSE,
  HOME_ITEMS_ERROR,
  SHOW_LOADER,
  HIDE_LOADER,
} from '../actions/actionsTypes';

/*****  for homeItems******/

export function* homeItems(action) {
  try {
 

    
    // yield put({type: SHOW_LOADER});
    const response = yield axios.get(ApiConfig.BASE_URL).then(res => res);
    console.log('api response',response.status)

    if (response.status === 200) {
      // console.log('response is =', response.data.home_data);
      yield put({
        type: HOME_ITEMS_RESPONSE,
        json: response.data,
      });
    }
  } catch (error) {
    // update your UI to handle other errors
    console.log(error);
    yield put({
      type: HOME_ITEMS_ERROR,
      json: error,
    });
    // yield put({ type: HIDE_LOADER });
  }
}

//put: dispatch an action into the store (non-blocking)

//yield: it essentially means the middleware stops/suspends the saga from moving on to the next step until the current step is done.
