import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* incrementAsync() {
  console.log('call')
  yield call(delay, 1000)
  yield put({type: 'INIT',data:[1,2,3]})
  // 使用 init 时 每秒调用一次该函数
}

export function* watchIncrementAsync()
{
  console.log('watch?')
  yield takeEvery('INIT', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}
// 官方例子