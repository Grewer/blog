import csshook from 'css-modules-require-hook/preset';

console.log('run')

const lessParser = require('postcss-less').parse;
require('css-modules-require-hook')({
  extensions: ['.less', '.css'],
  processorOpts: {parser: lessParser},
  preprocessCss: (data, filename) => {
    // return require('less').render(data);
    return lessParser(css, filename);
  },
  camelCase: true,
  generateScopedName: '[name]__[local]__[hash:base64:8]'
})


const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const userRoute = require("./userRoute");
const app = express();
const path = require('path');
app.use(cookieParser());
app.use(bodyParser.json());


require('babel-polyfill')
require('babel-register')({presets: ['es2015', 'react', 'stage-0']})

import React from 'react';
// import App from '../src/App';
import Test from '../src/test';
import '../src/static/css/common.css'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../src/redux/reducers'
import rootSaga from '../src/redux/saga'
import {Provider} from 'react-redux'
import "react-placeholder/lib/reactPlaceholder.css";
// import Router from '../src/router'

import {renderToString, renderToStaticMarkup} from 'react-dom/server';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)


// 接口模块
// app.use("/user",userRoute);

// 映射到build后的路径
//设置build以后的文件路径 项目上线用
app.use((req, res, next) => {
  if (req.url.startsWith('/user/') || req.url.startsWith('/static/')) {
    return next()
  }
  const frontComponents = renderToString(
    (<Provider store={store}>
      {/*<Router/>*/}
      {/*<App/>*/}
      <Test/>
    </Provider>)
  )
  res.send(frontComponents)

  // return res.sendFile(path.resolve('build/index.html'))
})

app.use('/', express.static(path.resolve('build')))

app.listen("9000", function () {
  console.log("open Browser http://localhost:9000");
});