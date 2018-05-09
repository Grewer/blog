import React, {Component} from 'react';
// import Article from '../../components/article'
import './index.less'
// 后面使用 saga 异步获取

let Mock = require('mockjs')
let data = Mock.mock({
  'list|10': [{
    'id|+1': 1,
    'title': '@sentence(3, 5)',
    'content': '@paragraph',
    'time': '@date("yyyy-MM-dd")',
    'clicks|1-100': 1
  }]
})



class Home extends Component {
  render() {
    return (<div className="body">
      {
        data.list.map((i, index) => {
          return (
            <div className="articleBox" key={index}>
              <p>{i.title}</p>
              <div>{i.content}</div>
              <span>{i.time}</span><span>{i.clicks}</span>
            </div>
          )
        })
      }
    </div>);
  }
}

export default Home;
