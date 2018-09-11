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


### Ps:
今年开了很多坑,希望能够在过年前能将坑都填完


### ssr 注意事项
   
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

- 插件问题,大多是下载插件和配置的原因
- HTML 中的路径需添加 '/'
- 最好添加 favicon.ico,不然换一次路径就会产生一次访问



### 服务端插件

- mysql
- express-myconnection


### 表结构

#### 博客文章表
- id 自增 主键
- 标题
- 内容 直接存入 markdown 格式 // 或者存入某一文件将文件路径放置此处
- 分类
- 标签
- 评论
- 创建时间
- 修改时间
- 修改者
- 是否删除

#### 分类表
- id 自增主键
- 分类名称
- 创建日期
- 是否删除

#### 标签表
// 同分类表

#### 评论表 // 待添加 github 自动登录
- id
- 对应的博客 id
- 名称
- 内容
- 回复 id
- 是否删除
- 时间

#### 点赞/反对 表
- id
- 对应的博客
- 点赞者 ? // 是否需要登陆后才可点赞 后续待定
- 时间

#### 评论 点赞/反对 表
- id
- 对应的评论
- 点赞者  // 同上
- 时间