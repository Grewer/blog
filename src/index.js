import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './static/css/common.css'

import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './redux/reducers'
import rootSaga from './redux/saga'
import {Provider} from 'react-redux'

let Mock = require('mockjs')
Mock.setup({
  timeout: '1000-1500'
})
Mock.mock('http://api.cn', {
  'list|10': [{
    'id|+1': 1,
    'title': '@sentence(3, 5)',
    'content': '@paragraph',
    'time': '@date("yyyy-MM-dd")',
    'clicks|1-100': 1,
    'category|1-10': 1
  }],
  pageSize: 20,
  pageAllNumber: 3,
  page: 1
})

Mock.mock('http://api.cn/getArticleById', {
  'list': {
    content: '@paragraph',
    title: '@sentence(3, 5)',
    time: '@date("yyyy-MM-dd")',
    'comments|2-10': [{content: '@sentence(3, 5)', 'id|1-100': '1',name:'@sentence(2, 4)', avatar: '', reply: {'id|1-10': 1, name: '@sentence(1, 2)'}}],
    // next:{title:'',id:''},
    // prev:''
  }
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
