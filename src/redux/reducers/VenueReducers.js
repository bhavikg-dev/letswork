import * as actions from "redux/action-types";
import { CancelToken } from "axios";

const initialState = {
    items: [],
    selectedVenue: [],
    filterType: '',
    venueId: 0,
    days: [],
    hasMore: true,
    page: 0,
    limit: 18,
    isLoading: false,
    cancelRequest: CancelToken.source()
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_VENUE_DATA:
      return {
        ...state,
        items: action.items,
        hasMore: action.hasMore,
        page: action.page,
      };
    case actions.SET_FILTER_TYPE:
      return {
        ...state,
        filterType: action.filterType,
      };
    case actions.SET_FUNCTION_DATE_INFO:
      return {
        ...state,
        days: action.days,
      };
    case actions.SET_SELECTED_VENUE_ID:
      return {
        ...state,
        venueId: action.venueId,
      };
    case actions.SET_SELECTED_VENUE_DATA:
      return {
        ...state,
        selectedVenue: action.selectedVenue,
      };
    case actions.LOADING_VENUE_DATA:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case actions.SET_VENUE_CANCEL_TOKEN:
      return {
        ...state,
        cancelRequest: action.token,
      };
    case actions.SET_VENUE_HAS_NO_MORE:
      return {
        ...state,
        hasMore: false,
      };

    default:
      return state;
  }
}
