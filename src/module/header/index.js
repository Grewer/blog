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
  }
]


class Header extends Component {
  render() {
    let match = window.location.pathname
    return (<div className="navMenu">
      <ul>
        {
          menu.map(i => {
            return (<li>
              <Link to={i.path} className={match === i.path ? 'active' : ''}>{i.name}</Link>
            </li>)
          })
        }
      </ul>
    </div>);
  }
}

export default Header;
