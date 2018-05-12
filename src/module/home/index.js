import React, {Component} from 'react';
// import Article from '../../components/article'
import './index.less'
// 后面使用 saga 异步获取
import {connect} from 'react-redux';

function filterContent(val) {
  return val.length > 300 ? val.substr(0, 300) + '...' : val
}

class Home extends Component {
  render() {
    const {ArticleList} = this.props
    return (
      <div className="body">
        {
          ArticleList.map((i, index) => {
            return (
              <div className="articleBox" key={index}>
                <p>{i.title}</p>
                <div>{filterContent(i.content)}</div>
                <span><svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-shijian"></use>
                  </svg>
                  {i.time}</span><span><svg className="icon ft-20" aria-hidden="true">
                  <use xlinkHref="#icon-tubiaozhizuomoban"></use>
                  </svg>
                {i.clicks}</span>
              </div>
            )
          })
        }
        <div className="pagination">
          <button className="btn-prev" disabled={true}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-xiangzuo"></use>
            </svg>
          </button>
          <ul>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <button className="btn-next">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-xiangyou"></use>
            </svg>
          </button>
        </div>
      </div>);
  }
}

function showData(state) {
  return {
    ArticleList: state
  }
}

export default connect(showData)(Home);
