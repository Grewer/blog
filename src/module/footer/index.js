import React, {Component} from 'react';
import styles from './index.less'
import pureRender from "grewer-pure-render";
import CSSModules from "react-css-modules";


@pureRender
class Footer extends Component {
  // 待加上 博客园 GitHub 链接
  render() {
    return (<div styleName="footer" >
      Copyright © 2018 • Grewer
    </div>)
  }
}

export default CSSModules(Footer,styles);
