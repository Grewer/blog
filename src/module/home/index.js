import React, {Component} from 'react';
// import Article from '../../components/article'
import './index.less'
// 后面使用 saga 异步获取
import {connect} from 'react-redux';

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
    const {dispatch,articleList} = this.props
    return (
      <div className="body">
      <button onClick={()=>{dispatch({type:'INIT'})}}>测试:调用 dispatch</button>
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
function showData(state) {
  return {
    ArticleList: state
  }
}
export default connect(showData)(Home);
