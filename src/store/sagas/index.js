import { all, takeLatest } from "redux-saga/effects";

import { Types as DevTypes } from "../ducks/devs";

import { addDev } from "./devs";

export default function* rootSaga() {
  yield all([takeLatest(DevTypes.ADD_REQUEST, addDev)]);
}
