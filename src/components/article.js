import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import {connect} from "react-redux";
import {propEq} from "../utils/arrayFunc";

// 首页即获取所有博客内容
// 每次进入这个页面 判断是否已加载博客
// 若是刷新后进入该页面的即 ajax 根据 id 获取,若无 id 退回到首页

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  render() {
    return (
      <div>{this.state.content.content ||
      <ReactLoading type="bubbles" color="#ddd" height={200} width={100} className="loading"/>}</div>
    )
  }

  componentWillMount() {
    const {id} = this.props.match.params
    let result = this.props.ArticleList.find(propEq('id', +id))
    if (result) {
      return this.setState({content: result})
    }
    // ajax dispatch
  }
}

function showData(state) {
  return {
    ArticleList: state.ArticleList
  }
}

export default connect(showData)(Article);