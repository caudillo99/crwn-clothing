import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import userActionsTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionsTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
