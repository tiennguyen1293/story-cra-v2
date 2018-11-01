import * as Cookie from 'js-cookie';
import * as actions from './actions';

const getLocale = () => Cookie.get('language') || 'en';

const initialState = getLocale();

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
