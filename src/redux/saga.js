import {call, put, takeEvery, fork} from 'redux-saga/effects'
import axios from 'axios'


function getAjax() {
  return axios.post('http://api.cn').then(data => data.data).catch(err => err)
}

function getOneAjax(id) {
  return axios.post('http://api.cn/getArticleById', {id}).then(data => {
    console.log(data);
    return data.data
  }).catch(err => err)
}

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
    yield fork(changeLoadingStatus, 'LOADED')
  } catch (e) {
    yield put({type: 'FAIL'}) // TODO 添加失败的画面
  }
}

function* changeLoadingStatus(type = 'LOADING') {
  yield put({type})
}

function* watchCacheAsync() {
  yield takeEvery('CACHE_ADD', changeLoadingStatus)
}


export function* watchIncrementAsync() {
  yield takeEvery('GETONE', getOneArticle)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    initFirstList(),
    watchIncrementAsync(),
    watchCacheAsync()
  ]
}

// 官方例子