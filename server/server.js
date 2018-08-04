// 这个页面 引入语法虽然有 es5也有 es6 ,但是是一样的,后续会规范整齐
import csshook from 'css-modules-require-hook/preset';

require('babel-polyfill')
require('babel-register')({
  presets: ['es2015', 'react'],
  plugins: ['add-module-exports', "transform-runtime"],
})

import assethook from 'asset-require-hook';

assethook({
  extensions: ['jpg', 'png', 'gif', 'webp'],
});

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const userRoute = require("./userRoute");
const app = express();
const path = require('path');
app.use(cookieParser());
app.use(bodyParser.json());



// index.js start
import React from 'react';
import App from '../src/App';
// import Test from '../src/test';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../src/redux/reducers'
import rootSaga from '../src/redux/saga'
import {Provider} from 'react-redux'
import "react-placeholder/lib/reactPlaceholder.css";
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import {StaticRouter} from "react-router";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
// index.js end


// 接口模块
// app.use("/api",userRoute);

import assetmanifest from "../build/asset-manifest"

app.use((req, res, next) => {
  if (req.url.startsWith('/api/') || req.url.startsWith('/static/')) {
    return next()
  }
  const context = {}
  const frontComponents = renderToString(
    (<Provider store={store}>
      <StaticRouter context={context}
                    location={req.url}
      >
        <App/>
      </StaticRouter>
    </Provider>)
  )


  const template =  `<!DOCTYPE html>
    <html lang="en">
     <head>
        <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, 
               maximum-scale=1, minimum-scale=1, user-scalable=no" />
             <meta name="theme-color" content="#000000">
                <title>Grewer Blog</title>
             <link rel="stylesheet" href=${assetmanifest["main.css"]}>
        </head>
       <body>
         <div id="root">${frontComponents}</div>
         <script src=${assetmanifest["vendor.js"]}></script>
         <script src=${assetmanifest["main.js"]}></script>
        </body>
    </html>`
  res.send(template)

  // return res.sendFile(path.resolve('build/index.html'))
})

app.use('/', express.static(path.resolve('build')))

app.listen("9000", function () {
  console.log("open Browser http://localhost:9000");
});