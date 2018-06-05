import React, {Component} from 'react';
import './index.less'
import pureRender from "grewer-pure-render";


@pureRender
class Footer extends Component {
  // 待加上 博客园 GitHub 链接
  render() {
    return (<div className="footer">
      Copyright © 2018 • Grewer
    </div>)
  }
}

export default Footer;
