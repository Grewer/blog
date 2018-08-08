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
import "react-placeholder/lib/reactPlaceholder.css";
import {BrowserRouter as Router} from 'react-router-dom'

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
    next: {name: '@sentence(3, 5)', id: 1},
    prev: {name: '@sentence(3, 5)', id: 2},
    label: ['js', 'html'],
    'comments|2-10': [{
      content: '@sentence(10,100)',
      time: '@date("yyyy-MM-dd")',
      'id|+1': 1,
      name: '@sentence(2, 4)',
      avatar: '',
      reply: {'id|1-10': 1, name: '@sentence(1, 2)'},
      agree: 10,
      disagree: 20
    }]
  }
})

Mock.mock(/getCategoryList$/, {
  'data|5': [
    {
      type: '@sentence(2, 4)',
      'id|+1': 1,
    }
  ]
})
Mock.mock(/getOneCategory$/, {
  'data': {
    name: '@sentence(2, 4)',
    'list|10': [
      {
        'id|+1': 1,
        title: '@sentence(2, 4)',
        time: '@date("yyyy-MM-dd")',
        'content': '@paragraph'
      }
    ]
  }

})




Mock.mock(/getArchives$/, {
  'data|5': [
    {
      time: '@date("yyyy")',
      'list|2-30': [
        {
          title: '@sentence(2, 4)',
          'time': '@date("MM-dd")',
          'id|+1': '1'
        }
      ]
    }
  ]
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)


ReactDOM.hydrate(<Provider store={store}>
  <Router><App/></Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
