import * as action from "../constant";
import { fork, all, takeLatest } from "redux-saga/effects";
import { profile } from "./profile";

function* profileSaga() {
  yield takeLatest(action.GET_USER_PROFILE_REQUEST, profile);
}

export default function* rootSaga() {
  yield all([fork(profileSaga)]);
}
