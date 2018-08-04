import React from 'react';
import styles from './index.less'
import {Link, NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import CSSModules from "react-css-modules";

const menu = [
  {
    path: '/',
    name: '首页',
    icon: 'shouye'
  },
  {
    path: '/category',
    name: '分类',
    icon: 'fenlei1'
  },
  {
    path: '/archives',
    name: '归档',
    icon: 'guidangxiangmu'
  }
]

@connect()
@CSSModules(styles)
class Header extends React.PureComponent {
  render() {
    let {dispatch} = this.props
    return (<div styleName="navMenu">
      <h2 styleName="title"><Link to="/">Grewer</Link></h2>
      <ul>
        {
          menu.map(i => {
            return (<li key={i.name}>
              <NavLink to={i.path}  activeClassName={this.props.styles.active} exact>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref={'#icon-' + i.icon}></use>
                </svg>
                {i.name}</NavLink>
            </li>)
          })
        }
      </ul>
      <svg styleName="contents" className="icon ft-30" aria-hidden="true" onClick={() => {dispatch({type: 'CHANGE'})}}>
        <use xlinkHref="#icon-mulu"></use>
      </svg>
    </div>);
  }
}

export default Header;
