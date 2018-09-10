import express from "express"
import graphqlHTTP from 'express-graphql'
import {buildSchema} from 'graphql'
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
//服务初始化


const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
const path = require('path');

//新建 express 对象

import db from './connect'
import schema from './schema'
import rootData from './rootQuery'


// 接口模块
app.use("/api", graphqlHTTP({
  schema: buildSchema(schema),
  rootValue: rootData,
  context: {db},
  graphiql: true,// 是否图形化
}));



import ssrRender from './ssr'

app.use(ssrRender)

app.use('/', express.static(path.resolve('build')))

app.listen("9000", function () {
  console.log("open Browser http://localhost:9000");
});