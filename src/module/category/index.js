import React, {Component} from 'react';
import fetch from "../../redux/ajax-config";
import pureRender from "grewer-pure-render";
import CSSModules from 'react-css-modules';
import styles from './index.less'
import ReactPlaceholder from 'react-placeholder';
import ReactLoading from 'react-loading';


@pureRender
@CSSModules(styles)
class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      category: null,
      loading: false
    }
  }

  showCate = (ev) => {
    this.setState({
      loading: true
    })
    fetch.post('http://api.cn/getOneCategory', {id: ev.target.dataset.cid}).then(data => {
      this.setState({category: data.data, loading: false})
    }).catch(err => {})
  }

  render() {
    const {category, list, loading} = this.state
    return (
      <ReactPlaceholder rows={7} ready={list.length !== 0}>
        <React.Fragment>
          <div styleName="box" onClick={this.showCate}>
            {
              list.map(v => <span data-cid={v.id} key={v.id}>{v.type}</span>)
            }
          </div>
          {loading ?
            <ReactLoading type="bubbles" styleName="m-auto" color="#409eff" height={50} width={100}/> : category ?
              <div styleName="main">
                <h2>{category.name}</h2>
                <ul>
                  {
                    category.list.map(v => {
                      return <li key={v.id}>
                        <div styleName="title">{v.title}</div>
                        <div styleName="content">
                          {v.content}
                        </div>
                      </li>
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
