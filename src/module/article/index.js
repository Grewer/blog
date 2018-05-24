import React, {Component} from 'react';
import {connect} from "react-redux";
import Comment from '../../components/comment'
import './index.less'

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
            {result.time}</span>) : null
        }
        <Comment comment={result.comments}/>
      </div>
    )
  }

  componentWillMount() {
    const {id} = this.props.match.params
    let result = this.props.cacheArticle[id]
    if (!result) {
      this.props.dispatch({type: 'GETONE', data: id})
    }
    // TODO 后期 给评论添加 hold 分开评论和文章接口  检测滚动 若滚动到评论上方200px 则再加载评论
  }
}

function showData(state) {
  return {
    cacheArticle: state.cacheArticle,
    loadingStatus: state.ArticleLoading
  }
}

export default connect(showData)(Article);