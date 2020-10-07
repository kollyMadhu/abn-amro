import axios from "axios";
import * as showsDeshboardAction from "../showsDeshboardAction";
const BASE_URL = "http://api.tvmaze.com";
const SEARCH_ALL_SHOWS ="/shows";
const SEARCH_SHOWS ="/search/shows";
/* http://api.tvmaze.com/search/shows?q=vre */

export const getAllShowsData = () => (dispatch) => {  
  try {
    axios
      .get(
        BASE_URL +
          SEARCH_ALL_SHOWS 
      )
      .then((res) => {
        if (res && res.data) {
          dispatch(showsDeshboardAction.getAllShowsData(res.data));
        }
      })
      .catch((err) => {
        dispatch(showsDeshboardAction.getAllShowsDataFail(err));
      });
  } catch (e) {
    dispatch(showsDeshboardAction.serverError(e));
  }
};

export const getShowsDetails = (showID) => (dispatch) => {
  try {
    axios
      .get(BASE_URL + SEARCH_ALL_SHOWS + `/${showID}?embed[]=seasons&embed[]=cast&embed[]=crew`)
      .then((res) => {
        if (res && res.data) {
          dispatch(showsDeshboardAction.getShowsDetails(res.data));
        }
      })
      .catch((err) => {
        dispatch(showsDeshboardAction.getShowsDetailsFail(err));
      });
  } catch (e) {
    dispatch(showsDeshboardAction.serverError(e));
  }
};

export const getSearchShow = (data) => (dispatch) => {
  try {
    axios
      .get(BASE_URL + SEARCH_SHOWS + `?q=${data}`)
      .then((res) => {
        if (res && res.data) {
          dispatch(showsDeshboardAction.getSearchShow(res.data));
        }
      })
      .catch((err) => {
        dispatch(showsDeshboardAction.getSearchShowFail(err));
      });
  } catch (e) {
    dispatch(showsDeshboardAction.serverError(e));
  }
};
