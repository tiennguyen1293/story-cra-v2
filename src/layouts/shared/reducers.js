import * as actions from './actions';
import * as Cookie from 'js-cookie';

const getLocale = () => Cookie.get('language') || 'en';

const initialState = {
  locale: getLocale(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_LANGUAGE:
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};
