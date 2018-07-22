import React from 'react';
import {connect} from 'react-redux';
import QueueAnim from 'rc-queue-anim';
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
@connect(state => ({phoneListStatus: state.phoneListStatus}))
class PhoneList extends React.PureComponent {
  href = (ev) => {
    const target = ev.target || ev;
    if (target.nodeName === 'LI') {
      const to = target.getAttribute('to')
      if (to && this.props.location.pathname !== to) {
        this.props.push(to)
        this.props.dispatch({type: 'CHANGE'})
      }
    } else {
      this.href(target.parentNode)
    }
  }

  render() {
    let {phoneListStatus} = this.props
    return (<QueueAnim type={['right', 'left']}
                       ease={['easeOutQuart', 'easeInOutQuart']} className="phoneList">
      {
        phoneListStatus ? <ul key="ul" onClick={this.href}>{
            menu.map(i => {
              return (<li to={i.path} key={i.path}>
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

export default PhoneList;
