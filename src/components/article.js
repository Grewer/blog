import React, { Component } from 'react';
import ReactLoading from 'react-loading';

// 首页即获取所有博客内容
// 每次进入这个页面 判断是否已加载博客
// 若是刷新后进入该页面的即 ajax 根据 id 获取,若无 id 退回到首页

class Article extends Component {
  render() {
    return (
      <div><ReactLoading type="bubbles" color="#ddd" height={200} width={100} className="loading" /></div>
    )
  }
}

export default Article;