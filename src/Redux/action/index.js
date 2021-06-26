import { createAction } from "redux-actions";
import * as constant from "../constant";

export const getUserProfileRequest = createAction(constant.GET_USER_PROFILE_REQUEST);
export const getUserProfileSuccess = createAction(constant.GET_USER_PROFILE_SUCCESS);
export const getUserProfileError = createAction(constant.GET_USER_PROFILE_ERROR);