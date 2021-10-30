import { combineReducers } from "redux";

import AccountReducers from "./AccountReducers";
import NavigationReducers from "./NavigationReducers";
import VenueReducers from "./VenueReducers";

const appReducer = combineReducers({
  accountData: AccountReducers,
  venueData: VenueReducers,
  navigationData: NavigationReducers,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
