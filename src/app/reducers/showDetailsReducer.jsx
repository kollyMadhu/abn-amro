import * as action from "./../action/showsDeshboardAction";
import * as actionType from "./../action/showsDeshboardActionType";

const showDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.SHOW_DETAILS: {
      const newState = Object.assign({}, state);
      newState.showDetailData = action.payload;
      return newState;
    }
    case actionType.SHOW_DETAILS_FAIL: {
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
export default showDetailsReducer;
