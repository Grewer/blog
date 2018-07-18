import React from 'react';
import styles from './index.less'
import CSSModules from "react-css-modules";


@CSSModules(styles)
class Footer extends React.PureComponent {
  // 待加上 博客园 GitHub 链接
  render() {
    return (<div styleName="footer">
      Copyright © 2018 • Grewer
    </div>)
  }
}

export default Footer;
