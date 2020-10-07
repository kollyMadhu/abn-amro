import { combineReducers } from "redux";
import showsDeshboardReducer from "./showsDeshboardReducer";
import showDetailsReducer from "./showDetailsReducer";
import searchShowReducer from "./searchShowReducer";


const allReducers = combineReducers({
  showsDeshboardReducer,
  showDetailsReducer,
  searchShowReducer
  
});
export default allReducers;

export const mapStateToProps = (state) => ({
  showsDeshboardReducer: state.showsDeshboardReducer,
  showDetailsReducer: state.showDetailsReducer,
  searchShowReducer: state.searchShowReducer
});
