import { createSelector } from "reselect";

const root = (state) => state.home;

export const getAllUsers = (state) => root(state).allUsers;
export const getCurrentUser = (state) => root(state).currentUser;

  /**
   * Selector returned memoize all users
   */
export const selectAllData = createSelector(
  getAllUsers,
  (data) => {
    return data;
  }
);
  /**
   * Selector returned memoize one user object
   */
export const selectCurrentUser = createSelector(getCurrentUser, (data) => {
  return data;
});