
const express = require("express");
const graphqlHTTP = require('express-graphql');
const {buildSchema} = require('graphql');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const path = require('path');

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
app.use("/api", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));



import ssrRender from './ssr'
app.use(ssrRender)

app.use('/', express.static(path.resolve('build')))

app.listen("9000", function () {
  console.log("open Browser http://localhost:9000");
});