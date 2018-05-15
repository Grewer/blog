import React, {Component} from 'react';
import {connect} from 'react-redux';

class PhoneList extends Component {
  render() {
    let {phoneListStatus} = this.props
    return (<div className={(phoneListStatus ? 'block' : 'hidden') +' '+ 'phoneList'}>
      <ul>
        <li key="1">1</li>
        <li key="2">2</li>
        <li key="3">3</li>
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
