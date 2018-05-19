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
      <div>{ result.content
        }</div>
    )
  }

  componentWillMount() {
    // 修改 页面回到首页再次进入此页面时该生命周期不会触发
    const {id} = this.props.match.params
    let result = this.props.cacheArticle[id]
    if (!result) {
      this.props.dispatch({type: 'GETONE', data: id})
      // loading 只能写在 saga 里么吗? 如果是 那每种独特的组件都要写一个么
      // 如果不是 则怎么写 无法得知 loading 结束
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