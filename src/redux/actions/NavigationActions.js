import * as actions from "redux/action-types";

export function setBookNowVenueModalStatus(status) {
  return {
    type: actions.SET_CREATE_NEW_CLIENT_MODAL_STATUS,
    status,
  };
}

export function setEditClientModalStatus(status) {
  return {
    type: actions.SET_EDIT_CLIENT_MODAL_STATUS,
    status,
  };
}
