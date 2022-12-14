import { all } from "redux-saga/effects";
import {
  watchIncrementAsync,
  watchIncrement,
  watchDecrement,
} from "@/modules/Counter/counter.saga";
import { watchFetchUsers } from "@/modules/Users/users.saga";

export default function* rootSaga() {
  yield all([
    watchIncrement(),
    watchDecrement(),
    watchIncrementAsync(),
    watchFetchUsers(),
  ]);
}
