import React, {Component} from 'react';
import pureRender from "grewer-pure-render";
import fetch from "../../redux/ajax-config";

@pureRender
class Archives extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  render() {
    // 圆形浮动圈
    return (<ul className="body">
      {
        this.state.list.map(i => {
          return (<li key={i.time}>
            <h3>{i.time}</h3>
            <ul>
              {i.list.map((j, _index) => {
                return (
                  <li key={_index}>{j.title}{j.time}</li>
                )
              })}
            </ul>
          </li>)
        })
      }
    </ul>);
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
