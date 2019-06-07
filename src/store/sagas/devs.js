import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as DevActions } from "../ducks/devs";

export function* addDev(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state =>
      state.devs.data.find(dev => dev.id === data.id)
    );

    if (isDuplicated) {
      yield put(DevActions.addDevFailure("Duplicated user!"));
    } else {
      const userData = {
        id: data.id,
        username: data.login,
        name: data.name,
        avatar: data.avatar_url,
        lat: action.payload.location.lat,
        lng: action.payload.location.lng
      };

      yield put(DevActions.addDevSuccess(userData, action.payload.location));
    }
  } catch (err) {
    yield put(DevActions.addDevFailure("Error adding user"));
  }
}
