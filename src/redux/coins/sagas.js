// import { takeEvery, call, put } from "redux-saga/effects";
// import fetchFunctions from "./fetchData";

// function* getCoins() {
//   try {
//     const user = yield call(() => fetchFunctions.getCoins());
//     yield put({ type: "SET_USER_ASYNC", payload: user });
//   } catch (err) {
//     yield put({ type: "SET_USER_FAILED_ASYNC", payload: err.massage });
//   }
// }

// function* getCoinsChart() {
//   try {
//     const user = yield call(() => fetchFunctions.getCoinsChart());
//     yield put({ type: "SET_USER_ASYNC", payload: user });
//   } catch (err) {
//     yield put({ type: "SET_USER_FAILED_ASYNC", payload: err.massage });
//   }
// }

// function* watchSaga() {
//   yield takeEvery("FETCH_COINS", getCoins);
//   yield takeEvery("FETCH_COINS_CHART", getCoinsChart);
// }

// export default watchSaga;
