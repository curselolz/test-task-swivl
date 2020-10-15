import { actionCreator } from "utils";

const action = actionCreator("HOME");

  /**
   * Action for trigger all users
   */
export const fetchAllUsers = action("FETCH_USERS");

  /**
   * Action for trigger current user by username
   */
export const fetchCurrentUser = action("FETCH_CURRENT_USER");