import csshook from 'css-modules-require-hook/preset';
import 'babel-polyfill'
import BabelRegister from 'babel-register'

BabelRegister({
  presets: ['es2015', 'react'],
  plugins: ['add-module-exports', "transform-runtime"],
})
import assethook from 'asset-require-hook';

assethook({
  extensions: ['jpg', 'png', 'gif', 'webp'],
});

import React from 'react';
import App from '../src/App';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../src/redux/reducers'
import rootSaga from '../src/redux/saga'
import {Provider} from 'react-redux'
import "react-placeholder/lib/reactPlaceholder.css";
import {renderToString, renderToNodeStream} from 'react-dom/server';
import {StaticRouter} from "react-router";
import assetmanifest from "../build/asset-manifest"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)




export default (req, res, next) => {
  if (req.url.startsWith('/api/') || req.url.startsWith('/static/') || req.url.startsWith('/favicon.ico')) {
    return next()
  }

  const context = {} // 这边的数据该如何获取
  const frontComponents = renderToNodeStream(
    (<Provider store={store}>
      <StaticRouter context={context}
                    location={req.url}
      >
        <App/>
      </StaticRouter>
    </Provider>)
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
    return;
  }

  res.write(`<!DOCTYPE html>
    <html lang="en">
     <head>
        <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, 
               maximum-scale=1, minimum-scale=1, user-scalable=no" />
             <meta name="theme-color" content="#000000">
             <link rel="shortcut icon" href="/favicon.ico">
             <title>Grewer Blog</title>
             <link rel="stylesheet" href=/${assetmanifest["main.css"]}>
             <script src="http://at.alicdn.com/t/font_663383_eztdg7dew9a.js"></script>
        </head>
       <body>
         <div id="root">`)
  // 如果不加 main.js  那么只能获取基本的格式,没有数据, 思路1:可以在此处获取数据,加入 window 中,使得具有初始数据

  frontComponents.pipe(res, {end: false})

  frontComponents.on('end', _ => {
    res.write(`</div>
         <script src=/${assetmanifest["vendor.js"]}></script>
         <script src=/${assetmanifest["main.js"]}></script>
        </body>
    </html>`)
    res.end()
  })
  // 记得在 src 后面添加 "/" ,因为 asset-manifest 中的路径为相对路径
  // return res.sendFile(path.resolve('build/index.html'))
}