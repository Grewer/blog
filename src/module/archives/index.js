import React from 'react';
import fetch from "../../redux/ajax-config";
import styles from './index.less'
import ReactPlaceholder from 'react-placeholder';
import {TextBlock, RectShape} from 'react-placeholder/lib/placeholders';
import CSSModules from 'react-css-modules';

function MyComponent({data,go}) {
  return (<ul>
    {data.map(i => (<li key={i.time}>
        <h3>{i.time}</h3>
        <ul styleName="dateList">
          {i.list.map((j, _index) => {
            return (
              <li key={_index} onClick={() => {
                go.push('/article/'+j.id)
              }}>
                <div className="ellipsis">{j.title}</div>
                <div styleName="date">{j.time}</div>
              </li>
            )
          })}
        </ul>
      </li>)
    )}</ul>)
}

const awesomePlaceholder = (
  <div className='my-awesome-placeholder'>
    <RectShape color='#eee' style={{width: '30%', height: 30, marginBottom: 20}}/>
    <TextBlock rows={7} color='#eee'/>
  </div>
);

@CSSModules(styles)
class Archives extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      list: ''
    }
  }

  render() {
    MyComponent = CSSModules(MyComponent, this.props.styles)
    return (
      <ReactPlaceholder customPlaceholder={awesomePlaceholder} ready={!!this.state.list}>
        <MyComponent data={this.state.list} go={this.props.history}/>
      </ReactPlaceholder>)
  }

  componentDidMount() {
    if (this.state.list.length === 0) {
      fetch.post('http://api.cn/getArchives').then(data => {
        this.setState({list: data.data})
      }).catch(err => {})
    }
  }
}

export default Archives;
