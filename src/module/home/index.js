import React, {Component} from 'react';
import styles from './index.less'
import {connect} from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import {Link} from "react-router-dom";
import ReactPlaceholder from 'react-placeholder';
import {TextBlock, RectShape} from 'react-placeholder/lib/placeholders';
import Pagination from '../../components/pagination'

function filterContent(val) {
  return val.length > 300 ? val.substr(0, 300) + '...' : val
}

const awesomePlaceholder = (
  <div className='my-awesome-placeholder'>
    <RectShape color='#eee' style={{width: '30%', height: 30, marginBottom: 20}}/>
    <TextBlock rows={7} color='#eee'/>
    <RectShape color='#eee' style={{width: '60%', height: '1em', marginTop: 20}}/>
    <RectShape color='#eee' style={{width: '30%', height: 30, marginBottom: 20, marginTop: 50}}/>
    <TextBlock rows={7} color='#eee'/>
    <RectShape color='#eee' style={{width: '60%', height: '1em', marginTop: 20}}/>
  </div>
);


@connect(
  state => ({ArticleList: state.ArticleList})
)
class Home extends Component {
  render() {
    const {ArticleList} = this.props
    return (
      <ReactPlaceholder customPlaceholder={awesomePlaceholder} ready={this.props.ArticleList.length !== 0}>
        <React.Fragment>
          <QueueAnim animConfig={[
            {opacity: [1, 0], translateY: [0, 50]},
            {opacity: [1, 0], translateY: [0, -50]}
          ]}>
            {
              ArticleList.map((i, index) =>
                <div className="articleBox" key={index}>
                  <p><Link to={'/article/' + i.id}>{i.title}</Link></p>
                  <div>{filterContent(i.content)}</div>
                  <span title="发布时间"><svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-shijian"></use>
                  </svg>
                    {i.time}</span><span title="阅读数"><svg className="icon ft-20" aria-hidden="true">
                  <use xlinkHref="#icon-tubiaozhizuomoban"></use>
                  </svg>
                  {i.clicks}</span>
                </div>)
            }
          </QueueAnim>
          <Pagination></Pagination>
        </React.Fragment>
      </ReactPlaceholder>)
  }

  componentDidMount() {
    let list = this.props.ArticleList
    if (list.length === 0) {
      this.props.dispatch({type: 'TODO_CREATED'})
    }
  }
}


export default Home;
