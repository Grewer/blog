import {call, put, takeEvery, fork, take} from 'redux-saga/effects'
import {
  getAjax,
  getOneAjax,
} from './ajax'

export function* initFirstList() {
  try {
    yield fork(changeLoadingStatus)
    let result = yield call(getAjax)
    yield put({type: 'INIT', data: result.list})
    yield fork(changeLoadingStatus, 'LOADED')
  } catch (e) {
  }
}


function* getOneArticle(data) {
  try {
    yield fork(changeLoadingStatus)
    let result = yield call(getOneAjax, data.data)
    yield put({type: 'CACHE_ADD', data: {id: data.data, object: result.list}})
    yield fork(changeLoadingStatus, 'LOADED')
  } catch (e) {
    yield put({type: 'FAIL'}) // TODO 添加失败的画面
  }
}

function* changeLoadingStatus(type = 'LOADING') {
  yield put({type})
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