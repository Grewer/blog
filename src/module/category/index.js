import React, {Component} from 'react';
import fetch from "../../redux/ajax-config";
import pureRender from "grewer-pure-render";
import CSSModules from 'react-css-modules';
import styles from './index.less'

@pureRender
@CSSModules(styles)
class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  render() {
    return (<React.Fragment>
      <div styleName="box">
        {
          this.state.list.map(v => <span data-cid={v.id} key={v.id}>{v.type}</span>)
        }
      </div>
    </React.Fragment>);
  }

  componentWillMount() {
    if (this.state.list.length === 0) {
      fetch.post('http://api.cn/getCategory').then(data => {
        this.setState({list: data.data})
      }).catch(err => {})
    }
  }
}

export default Category;
