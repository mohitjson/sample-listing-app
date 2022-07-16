import {HOME_ITEMS_RESPONSE} from '../actions/actionsTypes';

const initialState = {
  homecomponents: [],
};

const reducer = (state = initialState, action) => {
  // console.log(' homecomponents reducer action is =', action);
  switch (action.type) {
    case HOME_ITEMS_RESPONSE:
      return {
        ...state,
        homecomponents: action.json,
      };
    default:
      return state;
  }
};
export default reducer;
