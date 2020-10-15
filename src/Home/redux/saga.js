import { takeLatest, call, put } from "redux-saga/effects";

import * as api from "./api";
import * as actions from "./actions";

function* fetchAllUsers() {
  try {
    const response = yield call(api.fetchAllUsers);
    yield put(actions.fetchAllUsers.success(response));
  } catch (ex) {
    yield put(actions.fetchAllUsers.failure(ex));
  }
}

function* fetchCurrentUser({ payload }) {
  try {
    const response = yield call(api.fetchCurrentUser, payload);
    yield put(actions.fetchCurrentUser.success(response));
  } catch (ex) {
    yield put(actions.fetchCurrentUser.failure(ex));
  }
}


export default function* ordersCombineSagas() {
  yield takeLatest(actions.fetchAllUsers.request, fetchAllUsers);
  yield takeLatest(actions.fetchCurrentUser.request, fetchCurrentUser);
}
