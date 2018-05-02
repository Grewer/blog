import React, {Component} from 'react';
import './index.less'
import {Link} from "react-router-dom";

const menu = [
  {
    path: '/',
    name: '首页'
  },
  {
    path: '/category',
    name: '分类'
  },
  {
    path:'/list',
    name:'列表'
  }
]


class Header extends Component {
  render() {
    let match = this.props.location.pathname
    return (<div className="navMenu">
      <ul>
        {
          menu.map(i => {
            return (<li key={i.name}>
              <Link to={i.path} className={match === i.path ? 'active' : ''}>{i.name}</Link>
            </li>)
          })
        }
      </ul>
    </div>);
  }
}

export default Header;
