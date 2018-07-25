import React, {Component} from 'react';
import fetch from "../../redux/ajax-config";
import pureRender from "grewer-pure-render";
import CSSModules from 'react-css-modules';
import styles from './index.less'
import ReactPlaceholder from 'react-placeholder';

@pureRender
@CSSModules(styles)
class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      category: null,
      ready: false
    }

  }

  showCate = (ev) => {
    fetch.post('http://api.cn/getOneCategory', {id: ev.target.dataset.cid}).then(data => {
      this.setState({category: data.data})
      console.log(data)
    }).catch(err => {})

  }

  render() {
    const {category,list} = this.state
    return (
      <ReactPlaceholder rows={7} ready={list.length !== 0}>
        <React.Fragment>
          <div styleName="box" onClick={this.showCate}>
            {
              list.map(v => <span data-cid={v.id} key={v.id}>{v.type}</span>)
            }
          </div>
          {category ? <div styleName="main">
            <h2>{category.name}</h2>
            <ul>
              {
                category.list.map(v => {
                  return <li key={v.id}>{v.title}</li>
                })
              }
            </ul>
          </div> : null}
        </React.Fragment></ReactPlaceholder>);
  }

  componentWillMount() {
    if (this.state.list.length === 0) {
      fetch.post('http://api.cn/getCategoryList').then(data => {
        this.setState({list: data.data})
      }).catch(err => {})
    }
  }
}

export default Category;
