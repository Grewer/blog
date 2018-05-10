import React, {Component} from 'react';
// import Article from '../../components/article'
import './index.less'
// 后面使用 saga 异步获取
import {connect} from 'react-redux';



class Home extends Component {
  render() {
    const {dispatch,ArticleList} = this.props
    return (
      <div className="body">
      <button onClick={()=>{dispatch({type:'INIT'})}}>测试:调用 dispatch</button>
      {
        ArticleList.map((i, index) => {
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
