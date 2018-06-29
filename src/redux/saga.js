import {call, put, takeEvery, fork, take} from 'redux-saga/effects'
import {
  getAjax,
  getOneAjax,
} from './ajax'

export function* initFirstList() {
  try {
    let result = yield call(getAjax)
    yield put({type: 'INIT', data: result.list})
  } catch (e) {
  }
}


function* getOneArticle(data) {
  try {
    let result = yield call(getOneAjax, data.data)
    yield put({type: 'CACHE_ADD', data: {id: data.data, object: result.list}})
  } catch (e) {
    yield put({type: 'FAIL'}) // TODO 添加失败的画面
  }
}



//watch start

function* watchIncrementAsync() {
  yield takeEvery('GETONE', getOneArticle)
}


function* watchInit() {
  yield take('TODO_CREATED')
  yield call(initFirstList)
}


//watch end




// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    watchInit(),
    watchIncrementAsync(),
  ]
}

// 官方例子