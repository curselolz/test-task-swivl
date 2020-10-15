import { combineReducers } from "redux";

import homeReducer from "Home/redux/reducer";

export default combineReducers({
  home: homeReducer,
});
