import {call, put} from 'redux-saga/effects'
import axios from 'axios'


function getAjax() {
  return axios.post('http://api.cn').then(data => data.data).catch(err => err)
}


export function* initFirstList() {
  try {
    let result = yield call(getAjax)
    yield put({type: 'INIT', data: result.list})
  } catch (e) {
    // ajax 获取失败 放置此处
    console.log(e)
  }
}


export function* watchIncrementAsync() {
  console.log('watch?')
  // yield takeEvery('INIT', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    initFirstList(),
    watchIncrementAsync()
  ]
}

// 官方例子