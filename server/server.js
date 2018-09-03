import express from "express"
import graphqlHTTP from 'express-graphql'
import { buildSchema} from 'graphql'
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
//服务初始化


const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
const path = require('path');

//新建 express 对象

import db from './connect'


const createPromise = (sql) => {
  return new Promise((resolve, reject) => {
    db.query(sql, function (err, rows, fields) {
      if (err) throw err;
      console.log('The solution is: ', rows);
      resolve(rows)
    });
  })
}

const schema = buildSchema(`
  type testArr {
    user:String
  }

  type Query {
    hello: [testArr]
  }
`);

const root = {
  hello(obj, args, context, info) {
    // console.log(args.db)
    return createPromise('select  * from test')
  }
};


// 接口模块
app.use("/api", graphqlHTTP({
  schema: schema,
  rootValue: root,
  // context: {db},
  graphiql: true,// 是否图形化
}));



import ssrRender from './ssr'

app.use(ssrRender)

app.use('/', express.static(path.resolve('build')))

app.listen("9000", function () {
  console.log("open Browser http://localhost:9000");
});