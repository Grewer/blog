import React, {Component} from 'react';
import Article from '../../components/article'
import './index.less'
// ajax 获取数据
const array = [{title: '标题1', time: '2018-5-8', content: 'qwerty'}]
// 后面使用 saga 异步获取

class Home extends Component {
  render() {
    return (<div className="body">
      {
        array.map(i => {
          return (
            <div className="articleBox">
              <p>{i.title}</p>
              <div>{i.content}</div>
              <p>{i.time}</p>
            </div>
          )
        })
      }
    </div>);
  }
}

export default Home;
