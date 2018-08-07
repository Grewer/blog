import React from 'react';
import ReactLoading from 'react-loading';

export default (importComponentFunc) => (
  class AsyncComponent extends React.Component {
    state = {Component: null}

    // 基本的异步组件已完成,but该如何判定是否是第一次加载

    componentDidMount() {
      this.load()
    }

    load = () => {
      importComponentFunc().then(module => {
        this.setState({Component: module.default})
      }).catch(err => {
        new Error('error')
      })
    }

    render() {
      const {Component} = this.state;
      return Component ? <Component  {...this.props}/> :
        <ReactLoading type="bubbles" className="m-auto" color="#409eff" height={50} width={100}/>;
    }
  })



