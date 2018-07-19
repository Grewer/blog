import React, {Component} from 'react';
import {connect} from "react-redux";
import ReactPlaceholder from 'react-placeholder';
import {TextBlock, RectShape} from 'react-placeholder/lib/placeholders';
import pureRender from "grewer-pure-render";
import ArticleBody from './articleBody'


const awesomePlaceholder = (
  <div className='my-awesome-placeholder'>
    <RectShape color='#eee' style={{width: '30%', height: 30, marginBottom: 20, marginTop: 50}}/>
    <TextBlock rows={10} color='#eee'/>
  </div>
);

@pureRender
@connect(state => ({
  cacheArticle: state.cacheArticle
}))
class Article extends Component {
  render() {
    console.log('run')
    const {id} = this.props.match.params
    let result = this.props.cacheArticle[id] || {}
    return (
      <ReactPlaceholder customPlaceholder={awesomePlaceholder} ready={!!result.content}>
        <ArticleBody data={result} />
      </ReactPlaceholder>)
  }

  componentDidMount() {
    const {id} = this.props.match.params
    let result = this.props.cacheArticle[id]
    if (!result) {
      this.props.dispatch({type: 'GETONE', data: id})
    }
    document.getElementById('root').scrollIntoView(true);
    // TODO 后期 给评论添加 hold 分开评论和文章接口  检测滚动 若滚动到评论上方200px 则再加载评论
  }
}


export default Article;