import * as actions from "redux/action-types";

export function setUserData(userDetails) {
  return {
    type: actions.SET_SELECTED_USER_DETAILS,
    userDetails,
  };
}

export function clearUserData() {
  return {
    type: actions.CLEAR_SELECTED_USER_DETAILS
  };
}

export function setSelectedUserDetails(userDetails) {
  return async (dispatch, getState) => {
      await dispatch(setUserData(userDetails));
  };
}

export function clearSelectedUserDetails() {
  return async (dispatch, getState) => {
    await dispatch(clearUserData());
  };
}