import * as actions from "redux/action-types";
import { CancelToken } from "axios";


export function setVenueLoadingState(isLoading) {
  return {
      type: actions.LOADING_VENUE_DATA,
      isLoading,
  };
}

export function setFilterType(filterType) {
  return {
      type: actions.SET_FILTER_TYPE,
      filterType,
  };
}

export function setFunctionTimeAndDateInformaiton(days) {
  return {
      type: actions.SET_FUNCTION_DATE_INFO,
      days,
  };
}

export function setVenueId(venueId) {
  return {
      type: actions.SET_SELECTED_VENUE_ID,
      venueId,
  };
}

export function addVenuesDetails(items, hasMore, page) {
  return {
      type: actions.ADD_VENUE_DATA,
      items,
      hasMore,
      page,
  };
}

export function setVenuesDetails(selectedVenue) {
  return {
      type: actions.SET_SELECTED_VENUE_DATA,
      selectedVenue
  };
}

export function setVenueCancelToken(token) {
  return {
      type: actions.SET_VENUE_CANCEL_TOKEN,
      token,
  };
}


export function hasNoMoreVenue() {
  return {
      type: actions.SET_VENUE_HAS_NO_MORE,
  };
}


export function getMyVenueData() {
  return async (dispatch, getState) => {
      
    let state = await getState();
    let request = state.bankData.cancelRequest;

    const newRequestSource = CancelToken.source();
    await dispatch(setVenueCancelToken(newRequestSource));
    await dispatch(addVenuesDetails([], true, 0));

      await dispatch(addVenuesDetails([], true, 0));      

      await dispatch(setVenueLoadingState(true));
   
      dispatch(setVenueLoadingState(false));
  };
}