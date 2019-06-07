import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as DevActions } from "../ducks/devs";

export function* addDev(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const userData = {
      id: data.id,
      username: data.login,
      name: data.name,
      avatar: data.avatar_url
    };

    yield put(DevActions.addDevSuccess(userData));
  } catch (err) {
    yield put(DevActions.addDevFailure("Error adding user"));
  }
}
