import { put, call, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* addTextAsync({ text }) {
  yield call(delay, 3000)
  yield put({ type: 'SHOW_TEXT', text })
}

function* watchAddTextAsync() {
  yield takeEvery('SHOW_TEXT', addTextAsync)
}

export default function* rootSaga() {
  yield all([
    watchAddTextAsync()
  ])
}