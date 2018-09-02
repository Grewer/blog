import express from "express"
import graphqlHTTP from 'express-graphql'
import {buildSchema} from 'graphql'
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
//服务初始化

import mysql from 'mysql'
import myConnection from 'express-myconnection'
import dbOptions from './connect'
//数据库连接

const app = express();
const path = require('path');
//新建 express 对象


app.use(myConnection(mysql, dbOptions, 'pool'))

app.use(cookieParser());
app.use(bodyParser.json());

const schema = buildSchema(`
  type Hello{
    name:String
  }
  type Query {
    hello: Hello
  }
`);
const root = {
  hello: {
    name: 'Grewer'
  }
};

// 接口模块
// app.use("/api", graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));

app.use("/api", (req, res, next) => {
  console.log(req.query);
  req.getConnection((err, conn) => {
    if (err) {
      return next
    } else {
      conn.query('select * from test', [], (err, result) => {
        if (err) {
          return next(err)
        } else {
          console.log('success', result)
          res.json(result)
        }
      })
    }
  })

});


import ssrRender from './ssr'

app.use(ssrRender)

app.use('/', express.static(path.resolve('build')))

app.listen("9000", function () {
  console.log("open Browser http://localhost:9000");
});