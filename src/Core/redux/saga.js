import { all, fork } from "redux-saga/effects";
import concat from "lodash/concat";

import homeSaga from "Home/redux/saga";

const allSagas = concat(homeSaga);

export default function* appSagas() {
  yield all(allSagas.map(fork));
}
