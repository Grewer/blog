import React, {Component} from 'react';
import {connect} from 'react-redux';

class PhoneList extends Component {
  render() {
    let {phoneListStatus} = this.props
    return (<div className={phoneListStatus ? 'block' : 'hidden'}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>);
  }
}

function showData(state) {
  return {
    phoneListStatus: state.phoneListStatus
  }
}

export default connect(showData)(PhoneList);
