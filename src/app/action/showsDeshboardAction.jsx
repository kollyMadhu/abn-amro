import * as actionType from "./showsDeshboardActionType";

export const getAllShowsDataFail = () => ({
  type: actionType.RETRIVE_SHOWS_DATA_FAIL
});
export const getAllShowsData = data => ({
  type: actionType.SHOWS_DATA,
  payload:  [...data ]
});

export const getShowsDetailsFail = () => ({
  type: actionType.SHOW_DETAILS_FAIL
});
export const getShowsDetails = data => ({
  type: actionType.SHOW_DETAILS,
  payload:  {...data }
});

export const getSearchShowFail = () => ({
  type: actionType.SEARCH_SHOW_FAIL
});
export const getSearchShow = data => ({
  type: actionType.SEARCH_SHOW,
  payload:  [...data ]
});

export const serverError = () => ({
    type: actionType.SERVER_ERROR
  });

