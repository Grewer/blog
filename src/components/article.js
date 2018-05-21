import React, {Component} from 'react';
import {connect} from "react-redux";

// 首页即获取所有博客内容
// 每次进入这个页面 判断是否已加载博客
// 若是刷新后进入该页面的即 ajax 根据 id 获取,若无 id 退回到首页

class Article extends Component {
  render() {
    const {id} = this.props.match.params
    let result = this.props.cacheArticle[id] || {}
    return (
      <div className="body aPage">
        <p>{result.title}</p>
        <div className="content">
          {result.content}
        </div>
        {
          result.time ? (<span title="发布时间"><svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-shijian"></use>
                  </svg>
            {result.time}</span>): ''
        }
      </div>
    )
  }

  componentWillMount() {
    const {id} = this.props.match.params
    let result = this.props.cacheArticle[id]
    if (!result) {
      this.props.dispatch({type: 'GETONE', data: id})
    }
  }
}

function showData(state) {
  return {
    cacheArticle: state.cacheArticle,
    loadingStatus: state.ArticleLoading
  }
}

export default connect(showData)(Article);