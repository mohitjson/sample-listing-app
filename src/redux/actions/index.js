import * as Actions from './actionsTypes';

//These are action creators

export const homeItems = payload => ({
  type: Actions.HOME_ITEMS,
  payload,
});