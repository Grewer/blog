import React, {Component} from 'react';
import styles from './pagination.less'
import pureRender from "grewer-pure-render";
import CSSModules from "react-css-modules";

@CSSModules(styles)
@pureRender
class Pagination extends Component {
  render() {
    return (<div styleName="pagination">
      <button className="btn-prev" disabled={true}>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-xiangzuo"></use>
        </svg>
      </button>
      <ul>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <button className="btn-next">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-xiangyou"></use>
        </svg>
      </button>
    </div>)
  }
}

export default Pagination;
