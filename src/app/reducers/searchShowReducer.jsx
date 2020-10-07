import * as action from "./../action/showsDeshboardAction";
import * as actionType from "./../action/showsDeshboardActionType";

const searchShowReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.SEARCH_SHOW: {
      const newState = Object.assign({}, state);
      newState.searchShowDetail = action.payload;
      return newState;
    }
    case actionType.SEARCH_SHOW_FAIL: {
      const newState = Object.assign({}, state);
      return newState;
    }
    case actionType.SERVER_ERROR: {
      const newState = Object.assign({}, state);
      return newState;
    }
    default:
      return state;
  }
};
export default searchShowReducer;
