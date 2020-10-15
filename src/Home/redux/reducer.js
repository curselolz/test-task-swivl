import { createReducer } from "redux-act";
import produce from "immer";

import * as actions from "./actions";

const initialState = {
  allUsers: [],
  currentUser:{}
};

export default createReducer(
  {
    [actions.fetchAllUsers.request]: (state, payload) =>
      produce(state, (nextState) => {
        console.log("request Home");
      }),
    [actions.fetchAllUsers.success]: (state, payload) =>
      produce(state, (nextState) => {
        nextState.allUsers = payload;
      }),
    [actions.fetchAllUsers.failure]: (state, payload) =>
      produce(state, (nextState) => {
        console.log("failure");
      }),
    [actions.fetchCurrentUser.request]: (state, payload) =>
      produce(state, (nextState) => {
        console.log("request current");
      }),
    [actions.fetchCurrentUser.success]: (state, payload) =>
      produce(state, (nextState) => {
        nextState.currentUser = payload;
      }),
    [actions.fetchCurrentUser.failure]: (state, payload) =>
      produce(state, (nextState) => {
        console.log("failure");
      }),
  },
  initialState
);
