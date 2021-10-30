import * as actions from "redux/action-types";

const initialState = {
    showCreateNewClientModal: false,
    showEditClientModal: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    case actions.SET_CREATE_NEW_CLIENT_MODAL_STATUS:
      return {
        ...state,
        showCreateNewClientModal: (typeof action.status !== "undefined") ? action.status : !state.showCreateNewClientModal,
    };

    case actions.SET_EDIT_CLIENT_MODAL_STATUS:
      return {
        ...state,
        showEditClientModal: (typeof action.status !== "undefined") ? action.status : !state.showEditClientModal,
    };

    default:
      return state;
  }
}
