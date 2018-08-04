## Blog

> 记得上一个博客还是16年4月开始写的,bootstrap 和jq来编写前端的代码,不过,虽然是写好了,但是并没有挂载到服务器上去,当时还是大三没什么钱,也买不起服务器,所以博客一直挂载第三方平台,虽然不用操什么心,但是,自由度太小了,所以时隔两年我决定重新写一个博客页面,用了1年多的 Vue, 但是 react 我却一直处于 demo 水平,所以这次用 react 重构页面

### Usage:

```bash
// download it 

npm install

npm start
```

### Dependencies:
```json
{
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "react-redux": "^5.0.7",
    "react-router": "^4.2.0",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.1.4",
    "redux": "^4.0.0",
    "redux-saga": "^0.16.0",
    "less": "^3.0.2",
    "less-loader": "^4.1.0",
    "mockjs": "^1.0.1-beta3",
    "gfetch": "^2.0.6",
    "rc-queue-anim": "^1.5.0",
    "babel-plugin-transform-decorators-legacy": "^1.3.4",
    "grewer-pure-render": "^0.1.0",
    "react-markdown": "^3.3.2",
    "react-draft-wysiwyg": "^1.12.13",
    "draft-js": "^0.10.5",
    "immutable": "^3.8.2",
    "react-placeholder": "^3.0.1"

}
```

### 待添加:
- propTypes
- classNames


### Ps:
今年开了很多坑,希望能够在过年前能将坑都填完


### 打包优化插件:
原 js,css 大小
- js: 1.1M
- css: 31k
  
1. 添加 optimize-css-assets-webpack-plugin  
css -> 30k  
// todo 后续使用 css-module 

2. 使用 CommonsChunkPlugin 将 node-module 库单独引用出来:  
js: main  30k  
    vendor 1MB

    结论,如果不使用 cdn 加速 那么还不如不提取;

3. todo 后续使用 gzip 
   
   
package.json 中 babel 需添加如此
```
"presets": [
      "react-app",
      "es2015" //会引起 server 中的 import 错误
    ],
    "plugins": [
      "transform-decorators-legacy",
      "transform-class-properties" // 解决class 中使用 foo=()=>{} 报错
    ]
```

