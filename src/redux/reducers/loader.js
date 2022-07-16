import {SHOW_LOADER, HIDE_LOADER} from '../actions/actionsTypes';
const initialState = {
  isShow: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, isShow: true};
    case HIDE_LOADER:
      return {...state, isShow: false};
    default:
      return {...state, isShow: false};
  }
};

export default reducer;
