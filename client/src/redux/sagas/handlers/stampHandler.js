import { call, put } from "redux-saga/effects"
import { setStamp } from "../../slices/stampSlice"
import { requestPostStamp } from "../requests/stampRequest"

export function* handlePostStamp(action) {
  try {
    const response = yield call(requestPostStamp)
    const { data } = response
    yield put(setStamp({ ...data }))
  } catch (error) {
    console.log(error)
  }
}
