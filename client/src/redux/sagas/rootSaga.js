import { takeLatest } from "redux-saga/effects"
import { sendStamp } from "../slices/stampSlice"
import { handlePostStamp } from "./handlers/stampHandler"

export function* watcherSaga() {
  yield takeLatest(sendStamp.type, handlePostStamp)
}
