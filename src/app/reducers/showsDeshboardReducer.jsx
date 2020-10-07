import * as action from "./../action/showsDeshboardAction";
import * as actionType from "./../action/showsDeshboardActionType";

const showsDeshboardReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.SHOWS_DATA: {
      const newState = Object.assign({}, state);
      newState.showsData = action.payload;
      return newState;
    }
    case actionType.RETRIVE_SHOWS_DATA_FAIL: {
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
export default showsDeshboardReducer;
