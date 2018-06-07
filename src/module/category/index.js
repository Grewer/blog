import React, {Component} from 'react';
import fetch from "../../redux/ajax-config";
import pureRender from "grewer-pure-render";


@pureRender
class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  render() {
    // 圆形浮动圈
    return (<div>分类页面</div>);
  }

  componentWillMount() {
    if (this.state.list.length === 0) {
      fetch.post('http://api.cn/getCategory').then(data=>{
        console.log(data)
      }).catch(err=>{})
    }
  }
}

export default Category;
