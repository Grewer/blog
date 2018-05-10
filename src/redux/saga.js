import {delay} from 'redux-saga'
import {call, put, takeEvery} from 'redux-saga/effects'

let Mock = require('mockjs')
let data = Mock.mock({
  'list|10': [{
    'id|+1': 1,
    'title': '@sentence(3, 5)',
    'content': '@paragraph',
    'time': '@date("yyyy-MM-dd")',
    'clicks|1-100': 1
  }]
})


function getAjax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
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