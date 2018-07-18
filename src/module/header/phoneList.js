import React from 'react';
import {connect} from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import {Link} from "react-router-dom";
import pureRender from "grewer-pure-render";
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
@pureRender
@connect(state=>({phoneListStatus: state.phoneListStatus}))
class PhoneList extends React.PureComponent {
  render() {
    let {phoneListStatus} = this.props
    return (<QueueAnim type={['right', 'left']}
                       ease={['easeOutQuart', 'easeInOutQuart']} className="phoneList">
      {
        phoneListStatus ? <ul key="ul">{
            menu.map(i => {
              return (<Link to={i.path} key={i.path}>
                <li>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref={'#icon-' + i.icon}></use>
                  </svg>
                  {i.name}</li>
              </Link>)
            })}
          </ul>
          : null
      }
    </QueueAnim>);
  }
}
export default PhoneList;
