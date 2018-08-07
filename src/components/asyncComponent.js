import React from 'react';
import ReactLoading from 'react-loading';

let hasLoading = null // 可用此判定是否已加载过一次

export default (importComponentFunc) => (
  class AsyncComponent extends React.Component {
    state = {Component: null}


    componentDidMount() {
      this.load()
    }

    load = () => {
      hasLoading = true

      importComponentFunc().then(module => {
        this.setState({Component: module.default})
      }).catch(err => {
        new Error('error')
      })
    }

    render() {
      console.log('hasloading', hasLoading)

      const {Component} = this.state;
      return Component ? <Component  {...this.props}/> :
        <ReactLoading type="bubbles" className="m-auto" color="#409eff" height={50} width={100}/>;
    }
  })



