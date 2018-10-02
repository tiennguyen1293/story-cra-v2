import * as actions from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
   case actions.SIMPLE_ACTION:
    return {
     result: action.payload
    }
   default:
    return state
  }
 }