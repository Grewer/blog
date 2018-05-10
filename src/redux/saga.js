import {delay} from 'redux-saga'
import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'


function getAjax() {
  return new Promise((resolve, reject) => {
    axios.post('http://api.cn').then(data => {
      resolve(data.data)
    }).catch(err => {
      reject(err)
    })
  })
}


export function* initFirstList() {
  let result = yield getAjax()
  yield put({type: 'INIT', data: result.list})
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