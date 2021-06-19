import { put } from "@redux-saga/core/effects";
import { getUserProfileSuccess, getUserProfileError } from "../action";
import { profileData } from "../../utils/profileData";

export function* profile(action) {
  try {
    if (profileData) {
      yield put(getUserProfileSuccess({ response: profileData }));
    } else {
      yield put(getUserProfileError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(getUserProfileError({ error: "Data not fetched" }));
  }
}
