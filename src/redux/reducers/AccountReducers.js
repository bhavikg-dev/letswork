import * as actions from "redux/action-types";

const initialState = {
  selectedUser: null
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_SELECTED_USER_DETAILS:
      return {
        ...state,
        selectedUser: action.userDetails,
      };

    case actions.CLEAR_SELECTED_USER_DETAILS:
      return {
        ...state,
        selectedUser: null,
      };

    default:
      return state;
  }
}
