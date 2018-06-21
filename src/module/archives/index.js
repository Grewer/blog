import React, {Component} from 'react';
import pureRender from "grewer-pure-render";
import fetch from "../../redux/ajax-config";
import './index.less'
import hold from 'react-hold'

const MyComponentWithPlaceholder = hold((props) => {
    let data = props.data || []
    return (<ul className="body">
      {data.map(i => (<li key={i.time}>
          <h3>{i.time}</h3>
          <ul className="dateList">
            {i.list.map((j, _index) => {
              return (
                <li key={_index}>
                  <div className="ellipsis">{j.title}</div>
                  <div className="date">{j.time}</div>
                </li>
              )
            })}
          </ul>
        </li>)
      )}</ul>)
  },
  (props) => !props.data
)

@pureRender
class Archives extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ''
    }
    console.log(this)
  }

  render() {
    // 圆形浮动圈
    return (<MyComponentWithPlaceholder data={this.state.list}/>);
  }

  componentWillMount() {
    if (this.state.list.length === 0) {
      fetch.post('http://api.cn/getArchives').then(data => {
        console.log(data)
        this.setState({list: data.data})
      }).catch(err => {})
    }
  }
}

export default Archives;
