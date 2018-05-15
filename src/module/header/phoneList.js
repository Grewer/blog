import React, {Component} from 'react';
import {connect} from 'react-redux';
import QueueAnim from 'rc-queue-anim';

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
    path: '/list',
    name: '归档',
    icon: 'guidangxiangmu'
  }
]

class PhoneList extends Component {
  render() {
    let {phoneListStatus} = this.props
    return (<QueueAnim type={['right', 'left']}
                       ease={['easeOutQuart', 'easeInOutQuart']} className="phoneList">
      {
        phoneListStatus ? <ul key="ul">{
            menu.map(i => {
              return (<li key={i.path}>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref={'#icon-' + i.icon}></use>
                </svg>
                {i.name}</li>)
            })}
          </ul>
          : null
      }
    </QueueAnim>);
  }
}

function showData(state) {
  return {
    phoneListStatus: state.phoneListStatus
  }
}

export default connect(showData)(PhoneList);
